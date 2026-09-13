const WORKBOOK_URL = 'prosody_stimuli_2025.xlsx';
const ORDER_URL = 'prosody_order.json';

const state = {
  participantId: 'P01',
  orderType: 'sequential',
  activeTheme: 'light',
  stimuli: [],
  fixedOrder: [],
  practiceStimuli: [],
  practiceIndex: 0,
  practiceLogs: [],
  slides: [],
  currentSlideIndex: 0,
  startTime: null,
  endTime: null,
  slideLogs: []
};
let currentSlideStartTime = null;
let currentPracticeStartTime = null;

const $ = (id) => document.getElementById(id);

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function formatDuration(milliseconds) {
  const seconds = Math.floor(milliseconds / 1000);
  return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

function fitElementToLine(elementId, minimumFontSize = 17.6, maxPasses = 5) {
  const element = $(elementId);
  if (!element) return;
  const containerWidth = element.parentElement?.clientWidth || 0;
  if (containerWidth <= 0) return;

  element.style.fontSize = '';
  let fontSize = parseFloat(getComputedStyle(element).fontSize);
  if (!Number.isFinite(fontSize)) return;

  element.style.fontSize = `${fontSize}px`;

  for (let pass = 0; pass < maxPasses; pass += 1) {
    while (element.scrollWidth > containerWidth && fontSize > minimumFontSize) {
      fontSize -= 1;
      element.style.fontSize = `${fontSize}px`;
    }

    if (element.scrollWidth <= containerWidth || fontSize <= minimumFontSize) break;
  }
}

function fitSentenceToLine() {
  fitElementToLine('sentence-text', 14);
  fitElementToLine('japanese-text', 12);
}

function scheduleFitForActiveScreen() {
  requestAnimationFrame(() => {
    if ($('experiment-screen').classList.contains('active')) fitSentenceToLine();
    if ($('practice-screen').classList.contains('active')) fitWordToLine();
  });
  setTimeout(() => {
    if ($('experiment-screen').classList.contains('active')) fitSentenceToLine();
    if ($('practice-screen').classList.contains('active')) fitWordToLine();
  }, 80);
  setTimeout(() => {
    if ($('experiment-screen').classList.contains('active')) fitSentenceToLine();
    if ($('practice-screen').classList.contains('active')) fitWordToLine();
  }, 220);
}

async function loadStimuli() {
  const status = $('load-status');
  try {
    const [workbookResponse, orderResponse] = await Promise.all([fetch(WORKBOOK_URL), fetch(ORDER_URL)]);
    if (!workbookResponse.ok) throw new Error(`workbook HTTP ${workbookResponse.status}`);
    if (!orderResponse.ok) throw new Error(`order HTTP ${orderResponse.status}`);
    const [workbookBuffer, order] = await Promise.all([workbookResponse.arrayBuffer(), orderResponse.json()]);
    const workbook = XLSX.read(workbookBuffer, { type: 'array' });
    const sheetName = workbook.SheetNames.find((name) => name.toLowerCase() === 'order 1') || workbook.SheetNames[0];
    const rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { defval: '' });
    state.stimuli = rows
      .map((row, index) => ({
        stimulusId: index + 1,
        word: String(row.word || '').trim(),
        japanese: String(row.japanese || '').trim(),
        sentence: String(row.sentence || '').trim(),
        japanesesent: String(row.japanesesent || '').trim()
      }))
      .filter((item) => item.word && item.japanese && item.sentence && item.japanesesent);
    if (!state.stimuli.length) throw new Error('sentence / japanesesent columns were not found');
    const availableIds = new Set(state.stimuli.map((item) => item.stimulusId));
    const orderIds = order.stimulusIds || [];
    if (orderIds.length !== state.stimuli.length || new Set(orderIds).size !== orderIds.length || orderIds.some((id) => !availableIds.has(id))) {
      throw new Error('固定提示順と刺激データの数が一致しません');
    }
    state.fixedOrder = orderIds;
    status.textContent = '準備ができました。';
    $('start-btn').disabled = false;
  } catch (error) {
    status.textContent = `刺激ファイルを読み込めませんでした: ${error.message}`;
    status.classList.add('error');
  }
}

function setTheme(theme) {
  state.activeTheme = theme;
  document.body.className = `theme-${theme}`;
  document.querySelectorAll('.theme-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.theme === theme);
  });
}

function switchScreen(screenId) {
  document.querySelectorAll('.screen').forEach((screen) => {
    screen.classList.remove('active');
    screen.style.display = 'none';
  });
  const screen = $(screenId);
  screen.style.display = 'flex';
  requestAnimationFrame(() => {
    screen.classList.add('active');
  });
}

function renderSlide(index) {
  const slide = state.slides[index];
  $('sentence-text').textContent = slide.sentence;
  $('japanese-text').textContent = slide.japanesesent;
  scheduleFitForActiveScreen();
  $('current-slide-num')?.replaceChildren(index + 1);
  $('total-slide-num')?.replaceChildren(state.slides.length);
  if ($('progress-bar')) $('progress-bar').style.width = `${((index + 1) / state.slides.length) * 100}%`;
  $('prev-btn').disabled = index === 0;
  currentSlideStartTime = performance.now();
  state.slideLogs[index] = {
    slideIndex: index + 1,
    stimulusId: slide.stimulusId,
    repetition: slide.repetition,
    sentence: slide.sentence,
    japanesesent: slide.japanesesent,
    displayTimestamp: new Date().toISOString(),
    durationMs: null
  };
  const card = $('stimulus-card');
  card.classList.remove('slide-fade-in');
  void card.offsetWidth;
  card.classList.add('slide-fade-in');
}

function fitWordToLine() {
  fitElementToLine('word-text', 14);
  fitElementToLine('word-japanese-text', 12);
}

function renderPractice(index) {
  const item = state.practiceStimuli[index];
  $('word-text').textContent = item.word;
  $('word-japanese-text').textContent = item.japanese;
  scheduleFitForActiveScreen();
  $('practice-current-num').textContent = index + 1;
  $('practice-total-num').textContent = state.practiceStimuli.length;
  $('practice-prev-btn').disabled = index === 0;
  $('practice-next-btn').textContent = index === state.practiceStimuli.length - 1 ? '文の練習へ →' : '次へ →';
  currentPracticeStartTime = performance.now();
  state.practiceLogs[index] = {
    practiceNumber: index + 1,
    stimulusId: item.stimulusId,
    word: item.word,
    japanese: item.japanese,
    displayTimestamp: new Date().toISOString(),
    durationMs: null
  };
  const card = $('practice-card');
  card.classList.remove('slide-fade-in');
  void card.offsetWidth;
  card.classList.add('slide-fade-in');
}

function recordPractice() {
  if (currentPracticeStartTime === null || !state.practiceLogs[state.practiceIndex]) return;
  state.practiceLogs[state.practiceIndex].durationMs = Math.round(performance.now() - currentPracticeStartTime);
}

function beginSentenceExperiment() {
  recordPractice();
  state.currentSlideIndex = 0;
  state.slideLogs = new Array(state.slides.length);
  switchScreen('experiment-screen');
  renderSlide(0);
}

function nextPractice() {
  recordPractice();
  if (state.practiceIndex < state.practiceStimuli.length - 1) {
    state.practiceIndex += 1;
    renderPractice(state.practiceIndex);
  } else {
    beginSentenceExperiment();
  }
}

function prevPractice() {
  if (state.practiceIndex === 0) return;
  recordPractice();
  state.practiceIndex -= 1;
  renderPractice(state.practiceIndex);
}

function recordCurrentSlide() {
  if (currentSlideStartTime === null || !state.slideLogs[state.currentSlideIndex]) return;
  state.slideLogs[state.currentSlideIndex].durationMs = Math.round(performance.now() - currentSlideStartTime);
}

function nextSlide() {
  recordCurrentSlide();
  $('stimulus-card').classList.add('slide-fade-out');
  setTimeout(() => {
    $('stimulus-card').classList.remove('slide-fade-out');
    if (state.currentSlideIndex < state.slides.length - 1) {
      state.currentSlideIndex += 1;
      renderSlide(state.currentSlideIndex);
    } else {
      finishExperiment();
    }
  }, 150);
}

function prevSlide() {
  if (state.currentSlideIndex === 0) return;
  recordCurrentSlide();
  state.currentSlideIndex -= 1;
  renderSlide(state.currentSlideIndex);
}

function startExperiment() {
  state.participantId = $('participant-id')?.value.trim() || 'P01';
  state.orderType = 'fixed-random';
  const stimulusById = new Map(state.stimuli.map((stimulus) => [stimulus.stimulusId, stimulus]));
  const firstPass = state.fixedOrder.map((stimulusId) => ({ ...stimulusById.get(stimulusId), repetition: 1 }));
  state.slides = [...firstPass, ...firstPass.map((slide) => ({ ...slide, repetition: 2 }))];
  state.practiceStimuli = state.fixedOrder.map((stimulusId) => stimulusById.get(stimulusId));
  state.practiceIndex = 0;
  state.practiceLogs = new Array(state.practiceStimuli.length);
  state.startTime = performance.now();
  if ($('display-participant-id')) $('display-participant-id').textContent = state.participantId;
  switchScreen('practice-screen');
  renderPractice(0);
}

function finishExperiment() {
  recordCurrentSlide();
  state.endTime = performance.now();
  $('result-total-slides').textContent = `${state.slides.length} / ${state.slides.length}`;
  $('result-duration').textContent = formatDuration(state.endTime - state.startTime);
  switchScreen('completion-screen');
}

function exportLogsToCSV() {
  const escape = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`;
  const header = 'Phase,SlideNumber,ParticipantID,OrderType,StimulusID,Repetition,Word,Japanese,Sentence,JapaneseSentence,DisplayTimestamp,DurationMs';
  const practiceRows = state.practiceLogs.filter(Boolean).map((log) => [
    'practice', log.practiceNumber, escape(state.participantId), escape(state.orderType), log.stimulusId, '',
    escape(log.word), escape(log.japanese), '', '', escape(log.displayTimestamp), log.durationMs || 0
  ].join(','));
  const sentenceRows = state.slideLogs.filter(Boolean).map((log) => [
    'sentence', log.slideIndex, escape(state.participantId), escape(state.orderType), log.stimulusId, log.repetition,
    '', '', escape(log.sentence), escape(log.japanesesent), escape(log.displayTimestamp), log.durationMs || 0
  ].join(','));
  const blob = new Blob([`${header}\n${[...practiceRows, ...sentenceRows].join('\n')}\n`], { type: 'text/csv;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `prosody_log_${state.participantId}_${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.theme-btn').forEach((button) => button.addEventListener('click', () => {
    setTheme(button.dataset.theme);
    scheduleFitForActiveScreen();
  }));
  $('start-btn').addEventListener('click', startExperiment);
  $('practice-next-btn').addEventListener('click', nextPractice);
  $('practice-prev-btn').addEventListener('click', prevPractice);
  $('next-btn').addEventListener('click', nextSlide);
  $('prev-btn').addEventListener('click', prevSlide);
  $('download-log-btn').addEventListener('click', exportLogsToCSV);
  $('restart-btn').addEventListener('click', () => switchScreen('setup-screen'));
  document.addEventListener('keydown', (event) => {
    const practiceScreen = $('practice-screen');
    const experimentScreen = $('experiment-screen');
    if (practiceScreen.classList.contains('active')) {
      if (event.code === 'Space' || event.key === 'ArrowRight') { event.preventDefault(); nextPractice(); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); prevPractice(); }
      return;
    }
    if (!experimentScreen.classList.contains('active')) return;
    if (event.code === 'Space' || event.key === 'ArrowRight') { event.preventDefault(); nextSlide(); }
    if (event.key === 'ArrowLeft') { event.preventDefault(); prevSlide(); }
  });
  window.addEventListener('resize', scheduleFitForActiveScreen);

  if (document.fonts?.ready) {
    document.fonts.ready.then(scheduleFitForActiveScreen);
  }

  loadStimuli();
});
