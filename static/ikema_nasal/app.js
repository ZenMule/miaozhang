// app.js

let currentScreenState = 'welcome'; // welcome -> practice -> end_practice -> trial -> end
let trialIndex = 0;
let practiceIndex = 0;
let isPractice = true;
let practiceData = [];
let mainTrialData = [];

// The experiment says:
// set order random
// So we shuffle the trialData.
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initExperiment() {
    // 1. Sort the main trials by order_id strictly (1 to 156)
    mainTrialData = [...trialData].sort((a, b) => parseInt(a.order_id) - parseInt(b.order_id));

    // 2. Mock a practice loop. The original script used 0.15 * 156 ≈ 23 trials from ikema_nasals.csv
    // or loaded from conditions-nasal.csv. 
    // We will pick the first 10 items from the main data as practice, and shuffle them so they aren't completely predictable
    practiceData = [...mainTrialData].slice(0, 10);
    // Shuffle practice trials
    for (let i = practiceData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [practiceData[i], practiceData[j]] = [practiceData[j], practiceData[i]];
    }

    trialIndex = 0;
    practiceIndex = 0;
    isPractice = true;
    showScreen('screen-welcome');
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Map the HTML values properly without escaping tags natively but handle safely
function setText(id, text) {
    document.getElementById(id).innerHTML = text;
}

function nextScreen() {
    if (currentScreenState === 'welcome') {
        currentScreenState = 'practice';
        isPractice = true;
        showNextTrial();
    } else if (currentScreenState === 'end_practice') {
        currentScreenState = 'trial';
        isPractice = false;
        trialIndex = 0;
        showNextTrial();
    }
}

function showNextTrial() {
    let dataList = isPractice ? practiceData : mainTrialData;
    let currentIndex = isPractice ? practiceIndex : trialIndex;

    if (isPractice && currentIndex >= dataList.length) {
        currentScreenState = 'end_practice';
        showScreen('screen-end-practice');
        return;
    } else if (!isPractice && currentIndex >= dataList.length) {
        currentScreenState = 'end';
        showScreen('screen-end');
        return;
    }

    const trial = dataList[currentIndex];
    showScreen('screen-trial');

    setText('te-ikemap', `問題：${trial.ikemap}`);
    setText('te-prompt', `(日本語：${trial.prompt})`);

    document.getElementById('te-image').src = "media/" + trial.pics;

    setText('te-ikemas', `答え：${trial.ikemas}`);
    setText('te-sentence', `(日本語：${trial.sentence})`);

    if (isPractice) {
        setText('te-progress', `練習: ${currentIndex + 1}/${dataList.length}`);
    } else {
        setText('te-progress', `${trial.order_id}/156`);
    }

    if (isPractice) {
        practiceIndex++;
    } else {
        trialIndex++;
    }
}

document.addEventListener('keydown', (e) => {
    // If we're inside a trial, move to next trial on any key press (simulates OpenSesame keypress duration).
    if (currentScreenState === 'trial' || currentScreenState === 'practice') {
        showNextTrial();
    }
});

function closeExperiment() {
    document.body.innerHTML = "<h1 style='color:white;text-align:center;margin-top:20%'>実験は終了しました。このタブを閉じてください。</h1>";
}

// Scale the entire presentation down uniformly if the window is too small, just like OpenSesame letterboxing
function resizeScaling() {
    const area = document.getElementById('presentation-area');
    const scaleX = window.innerWidth / 1440;
    const scaleY = window.innerHeight / 900;
    const scale = Math.min(scaleX, Math.min(scaleY, 1.0)); // Don't scale up, only down
    area.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', resizeScaling);
resizeScaling();

initExperiment();
