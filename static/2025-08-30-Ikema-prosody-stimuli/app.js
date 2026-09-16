// Stimuli data embedded directly to avoid fetch()/CORS/file:// issues when deployed or run offline.
const STIMULI = [
  {
    "stimulusId": 1,
    "word": "マグ",
    "japanese": "かご",
    "sentence": "マグマイ ニャーン 。",
    "japanesesent": "かごもない。"
  },
  {
    "stimulusId": 2,
    "word": "マグ",
    "japanese": "かご",
    "sentence": "マグマイ アリードゥー 。",
    "japanesesent": "かごもある。"
  },
  {
    "stimulusId": 3,
    "word": "マグ",
    "japanese": "かご",
    "sentence": "マグマイ アリードゥー ナ？",
    "japanesesent": "かごもあるか？"
  },
  {
    "stimulusId": 4,
    "word": "マグ",
    "japanese": "かご",
    "sentence": "マグマイ ニャーン ナ？",
    "japanesesent": "かごもないか？"
  },
  {
    "stimulusId": 5,
    "word": "サバ",
    "japanese": "サメ",
    "sentence": "サバマイ ウリードゥー ナ？",
    "japanesesent": "サメもいるか？"
  },
  {
    "stimulusId": 6,
    "word": "サバ",
    "japanese": "サメ",
    "sentence": "サバマイ ミーン 。",
    "japanesesent": "サメもいない。"
  },
  {
    "stimulusId": 7,
    "word": "サバ",
    "japanese": "サメ",
    "sentence": "サバマイ ウリードゥー 。",
    "japanesesent": "サメもいる。"
  },
  {
    "stimulusId": 8,
    "word": "サバ",
    "japanese": "サメ",
    "sentence": "サバマイ ミーン ナ？",
    "japanesesent": "サメもいないか？"
  },
  {
    "stimulusId": 9,
    "word": "ウル",
    "japanese": "つのまた",
    "sentence": "ウルマイ アリードゥー ナ？",
    "japanesesent": "つのまたもあるか？"
  },
  {
    "stimulusId": 10,
    "word": "ウル",
    "japanese": "つのまた",
    "sentence": "ウルマイ ニャーン 。",
    "japanesesent": "つのまたもない。"
  },
  {
    "stimulusId": 11,
    "word": "ウル",
    "japanese": "つのまた",
    "sentence": "ウルマイ ニャーン ナ？",
    "japanesesent": "つのまたもないか？"
  },
  {
    "stimulusId": 12,
    "word": "ウル",
    "japanese": "つのまた",
    "sentence": "ウルマイ アリードゥー 。",
    "japanesesent": "つのまたもある。"
  },
  {
    "stimulusId": 13,
    "word": "カジャ",
    "japanese": "匂い",
    "sentence": "カジャマイ アリードゥー ナ？",
    "japanesesent": "匂いもあるか？"
  },
  {
    "stimulusId": 14,
    "word": "カジャ",
    "japanese": "匂い",
    "sentence": "カジャマイ ニャーン 。",
    "japanesesent": "匂いもない。"
  },
  {
    "stimulusId": 15,
    "word": "カジャ",
    "japanese": "匂い",
    "sentence": "カジャマイ ニャーン ナ？",
    "japanesesent": "匂いもないか？"
  },
  {
    "stimulusId": 16,
    "word": "カジャ",
    "japanese": "匂い",
    "sentence": "カジャマイ アリードゥー 。",
    "japanesesent": "匂いもある。"
  },
  {
    "stimulusId": 17,
    "word": "アグ",
    "japanese": "友達",
    "sentence": "アグマイ ウリードゥー ナ？",
    "japanesesent": "友達もいるか？"
  },
  {
    "stimulusId": 18,
    "word": "アグ",
    "japanese": "友達",
    "sentence": "アグマイ ミーン ナ？",
    "japanesesent": "友達もいないか？"
  },
  {
    "stimulusId": 19,
    "word": "アグ",
    "japanese": "友達",
    "sentence": "アグマイ ミーン 。",
    "japanesesent": "友達もいない。"
  },
  {
    "stimulusId": 20,
    "word": "アグ",
    "japanese": "友達",
    "sentence": "アグマイ ウリードゥー 。",
    "japanesesent": "友達もいる。"
  },
  {
    "stimulusId": 21,
    "word": "ンス",
    "japanese": "右",
    "sentence": "ンスマイ アリードゥー 。",
    "japanesesent": "右もある。"
  },
  {
    "stimulusId": 22,
    "word": "ンス",
    "japanese": "右",
    "sentence": "ンスマイ アリードゥー ナ？",
    "japanesesent": "右もあるか？"
  },
  {
    "stimulusId": 23,
    "word": "ンス",
    "japanese": "右",
    "sentence": "ンスマイ ニャーン 。",
    "japanesesent": "右もない。"
  },
  {
    "stimulusId": 24,
    "word": "ンス",
    "japanese": "右",
    "sentence": "ンスマイ ニャーン ナ？",
    "japanesesent": "右もないか？"
  },
  {
    "stimulusId": 25,
    "word": "アラ",
    "japanese": "外",
    "sentence": "アラマイ アリードゥー ナ？",
    "japanesesent": "外もあるか？"
  },
  {
    "stimulusId": 26,
    "word": "アラ",
    "japanese": "外",
    "sentence": "アラマイ アリードゥー 。",
    "japanesesent": "外もある。"
  },
  {
    "stimulusId": 27,
    "word": "アラ",
    "japanese": "外",
    "sentence": "アラマイ ニャーン 。",
    "japanesesent": "外もない。"
  },
  {
    "stimulusId": 28,
    "word": "アラ",
    "japanese": "外",
    "sentence": "アラマイ ニャーン ナ？",
    "japanesesent": "外もないか？"
  },
  {
    "stimulusId": 29,
    "word": "ブトゥ",
    "japanese": "夫",
    "sentence": "ブトゥマイ ウリードゥー ナ？",
    "japanesesent": "夫もいるか？"
  },
  {
    "stimulusId": 30,
    "word": "ブトゥ",
    "japanese": "夫",
    "sentence": "ブトゥマイ ウリードゥー 。",
    "japanesesent": "夫もいる。"
  },
  {
    "stimulusId": 31,
    "word": "ブトゥ",
    "japanese": "夫",
    "sentence": "ブトゥマイ ミーン ナ？",
    "japanesesent": "夫もいないか？"
  },
  {
    "stimulusId": 32,
    "word": "ブトゥ",
    "japanese": "夫",
    "sentence": "ブトゥマイ ミーン 。",
    "japanesesent": "夫もいない。"
  },
  {
    "stimulusId": 33,
    "word": "トゥズ",
    "japanese": "妻",
    "sentence": "トゥズマイ ミーン ナ？",
    "japanesesent": "妻もいないか？"
  },
  {
    "stimulusId": 34,
    "word": "トゥズ",
    "japanese": "妻",
    "sentence": "トゥズマイ ウリードゥー 。",
    "japanesesent": "妻もいる。"
  },
  {
    "stimulusId": 35,
    "word": "トゥズ",
    "japanese": "妻",
    "sentence": "トゥズマイ ミーン 。",
    "japanesesent": "妻もいない。"
  },
  {
    "stimulusId": 36,
    "word": "トゥズ",
    "japanese": "妻",
    "sentence": "トゥズマイ アリードゥー ナ？",
    "japanesesent": "妻もいるか？"
  },
  {
    "stimulusId": 37,
    "word": "ティビ",
    "japanese": "後ろ",
    "sentence": "ティビマイ アリードゥー ナ？",
    "japanesesent": "後ろもあるか？"
  },
  {
    "stimulusId": 38,
    "word": "ティビ",
    "japanese": "後ろ",
    "sentence": "ティビマイ ニャーン ナ？",
    "japanesesent": "後ろもないか？"
  },
  {
    "stimulusId": 39,
    "word": "ティビ",
    "japanese": "後ろ",
    "sentence": "ティビマイ アリードゥー 。",
    "japanesesent": "後ろもある。"
  },
  {
    "stimulusId": 40,
    "word": "ティビ",
    "japanese": "後ろ",
    "sentence": "ティビマイ ニャーン 。",
    "japanesesent": "後ろもない。"
  },
  {
    "stimulusId": 41,
    "word": "ティダ",
    "japanese": "太陽",
    "sentence": "ティダマイ ニャーン ナ？",
    "japanesesent": "太陽もないか？"
  },
  {
    "stimulusId": 42,
    "word": "ティダ",
    "japanese": "太陽",
    "sentence": "ティダマイ アリードゥー ナ？",
    "japanesesent": "太陽もあるか？"
  },
  {
    "stimulusId": 43,
    "word": "ティダ",
    "japanese": "太陽",
    "sentence": "ティダマイ アリードゥー 。",
    "japanesesent": "太陽もある。"
  },
  {
    "stimulusId": 44,
    "word": "ティダ",
    "japanese": "太陽",
    "sentence": "ティダマイ ニャーン 。",
    "japanesesent": "太陽もない。"
  },
  {
    "stimulusId": 45,
    "word": "イン",
    "japanese": "海",
    "sentence": "インマイ アリードゥー 。",
    "japanesesent": "海もある。"
  },
  {
    "stimulusId": 46,
    "word": "イン",
    "japanese": "海",
    "sentence": "インマイ ニャーン 。",
    "japanesesent": "海もない。"
  },
  {
    "stimulusId": 47,
    "word": "イン",
    "japanese": "海",
    "sentence": "インマイ アリードゥー ナ？",
    "japanesesent": "海もあるか？"
  },
  {
    "stimulusId": 48,
    "word": "イン",
    "japanese": "海",
    "sentence": "インマイ ニャーン ナ？",
    "japanesesent": "海もないか？"
  },
  {
    "stimulusId": 49,
    "word": "イン",
    "japanese": "犬",
    "sentence": "インマイ ミーン 。",
    "japanesesent": "犬もいない。"
  },
  {
    "stimulusId": 50,
    "word": "イン",
    "japanese": "犬",
    "sentence": "インマイ ウリードゥー 。",
    "japanesesent": "犬もいる。"
  },
  {
    "stimulusId": 51,
    "word": "イン",
    "japanese": "犬",
    "sentence": "インマイ ミーン ナ？",
    "japanesesent": "犬もいないか？"
  },
  {
    "stimulusId": 52,
    "word": "イン",
    "japanese": "犬",
    "sentence": "インマイ ウリードゥー ナ？",
    "japanesesent": "犬もいるか？"
  },
  {
    "stimulusId": 53,
    "word": "クバ",
    "japanese": "檳榔",
    "sentence": "クバマイ ニャーン ナ？",
    "japanesesent": "檳榔もないか？"
  },
  {
    "stimulusId": 54,
    "word": "クバ",
    "japanese": "檳榔",
    "sentence": "クバマイ ニャーン 。",
    "japanesesent": "檳榔もない。"
  },
  {
    "stimulusId": 55,
    "word": "クバ",
    "japanese": "檳榔",
    "sentence": "クバマイ アリードゥー 。",
    "japanesesent": "檳榔もある。"
  },
  {
    "stimulusId": 56,
    "word": "クバ",
    "japanese": "檳榔",
    "sentence": "クバマイ アリードゥー ナ？",
    "japanesesent": "檳榔もあるか？"
  },
  {
    "stimulusId": 57,
    "word": "バサ",
    "japanese": "バナナ",
    "sentence": "バサマイ ミーン ナ？",
    "japanesesent": "バナナもいないか？"
  },
  {
    "stimulusId": 58,
    "word": "バサ",
    "japanese": "バナナ",
    "sentence": "バサマイ ウリードゥー ナ？",
    "japanesesent": "バナナもいるか？"
  },
  {
    "stimulusId": 59,
    "word": "バサ",
    "japanese": "バナナ",
    "sentence": "バサマイ ウリードゥー 。",
    "japanesesent": "バナナもいる。"
  },
  {
    "stimulusId": 60,
    "word": "バサ",
    "japanese": "バナナ",
    "sentence": "バサマイ ミーン 。",
    "japanesesent": "バナナもいない。"
  },
  {
    "stimulusId": 61,
    "word": "ソゥディ",
    "japanese": "袖",
    "sentence": "ソゥディマイ ニャーン ナ？",
    "japanesesent": "袖もないか？"
  },
  {
    "stimulusId": 62,
    "word": "ソゥディ",
    "japanese": "袖",
    "sentence": "ソゥディマイ アリードゥー ナ？",
    "japanesesent": "袖もあるか？"
  },
  {
    "stimulusId": 63,
    "word": "ソゥディ",
    "japanese": "袖",
    "sentence": "ソゥディマイ ニャーン 。",
    "japanesesent": "袖もない。"
  },
  {
    "stimulusId": 64,
    "word": "ソゥディ",
    "japanese": "袖",
    "sentence": "ソゥディマイ アリードゥー 。",
    "japanesesent": "袖もある。"
  }
];
const FIXED_ORDER = [9, 45, 31, 18, 58, 35, 26, 42, 62, 39, 49, 63, 32, 16, 48, 29, 41, 61, 20, 52, 50, 15, 43, 23, 30, 28, 38, 60, 4, 19, 24, 12, 8, 33, 59, 34, 51, 7, 55, 36, 57, 44, 22, 37, 25, 40, 56, 47, 5, 3, 6, 21, 53, 2, 10, 64, 14, 27, 54, 1, 13, 11, 46, 17];

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

function fitSentenceToLine() {
  const sentence = $('sentence-text');
  const containerWidth = sentence.parentElement.clientWidth;
  sentence.style.fontSize = '';
  let fontSize = parseFloat(getComputedStyle(sentence).fontSize);
  const minimumFontSize = 17.6;
  sentence.style.fontSize = `${fontSize}px`;
  while (sentence.scrollWidth > containerWidth && fontSize > minimumFontSize) {
    fontSize -= 1;
    sentence.style.fontSize = `${fontSize}px`;
  }
}

function loadStimuli() {
  const status = $('load-status');
  try {
    state.stimuli = STIMULI.map((item) => ({ ...item }));
    if (!state.stimuli.length) throw new Error('sentence / japanesesent columns were not found');
    const availableIds = new Set(state.stimuli.map((item) => item.stimulusId));
    const orderIds = FIXED_ORDER;
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
  requestAnimationFrame(() => screen.classList.add('active'));
}

function renderSlide(index) {
  const slide = state.slides[index];
  $('sentence-text').textContent = slide.sentence;
  $('japanese-text').textContent = slide.japanesesent;
  fitSentenceToLine();
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
  const word = $('word-text');
  const containerWidth = word.parentElement.clientWidth;
  word.style.fontSize = '';
  let fontSize = parseFloat(getComputedStyle(word).fontSize);
  const minimumFontSize = 17.6;
  word.style.fontSize = `${fontSize}px`;
  while (word.scrollWidth > containerWidth && fontSize > minimumFontSize) {
    fontSize -= 1;
    word.style.fontSize = `${fontSize}px`;
  }
}

function renderPractice(index) {
  const item = state.practiceStimuli[index];
  $('word-text').textContent = item.word;
  $('word-japanese-text').textContent = item.japanese;
  fitWordToLine();
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
  document.querySelectorAll('.theme-btn').forEach((button) => button.addEventListener('click', () => setTheme(button.dataset.theme)));
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
  window.addEventListener('resize', () => {
    if ($('experiment-screen').classList.contains('active')) fitSentenceToLine();
    if ($('practice-screen').classList.contains('active')) fitWordToLine();
  });
  loadStimuli();
});
