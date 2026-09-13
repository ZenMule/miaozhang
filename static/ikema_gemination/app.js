// ==========================================================================
// Stimuli Dataset (Embedded to prevent CORS issues when run offline via file://)
// ==========================================================================
const STIMULI = [
  {
    "word_id": 1,
    "Japanese": "棒",
    "English": "stick",
    "Ikema": "ばう",
    "target_cons": "b",
    "vowel": "a",
    "quant": "short",
    "voicing": "vcd",
    "poa": "bilabial",
    "manner": "stop",
    "carrier": "まさいがどぅ ばう てぃー はーらー",
    "japanese_sent": "まさいが「棒」と言ったらしい。"
  },
  {
    "word_id": 2,
    "Japanese": "座る",
    "English": "to sit",
    "Ikema": "びー",
    "target_cons": "b",
    "vowel": "i",
    "quant": "short",
    "voicing": "vcd",
    "poa": "bilabial",
    "manner": "stop",
    "carrier": "まさいがどぅ びー てぃー はーらー",
    "japanese_sent": "まさいが「座る」と言ったらしい。"
  },
  {
    "word_id": 3,
    "Japanese": "苧麻",
    "English": "Ramie",
    "Ikema": "ぶー",
    "target_cons": "b",
    "vowel": "u",
    "quant": "short",
    "voicing": "vcd",
    "poa": "bilabial",
    "manner": "stop",
    "carrier": "まさいがどぅ ぶー てぃー はーらー",
    "japanese_sent": "まさいが「苧麻」と言ったらしい。"
  },
  {
    "word_id": 4,
    "Japanese": "着せる",
    "English": "make wear",
    "Ikema": "っちゃす",
    "target_cons": "cch",
    "vowel": "a",
    "quant": "long",
    "voicing": "vls",
    "poa": "alveolopalatal",
    "manner": "affricate",
    "carrier": "まさいがどぅ っちゃす てぃー はーらー",
    "japanese_sent": "まさいが「着せる」と言ったらしい。"
  },
  {
    "word_id": 5,
    "Japanese": "壊れる",
    "English": "collapse",
    "Ikema": "っちゅい",
    "target_cons": "cch",
    "vowel": "u",
    "quant": "long",
    "voicing": "vls",
    "poa": "alveolopalatal",
    "manner": "affricate",
    "carrier": "まさいがどぅ っちゅい てぃー はーらー",
    "japanese_sent": "まさいが「壊れる」と言ったらしい。"
  },
  {
    "word_id": 6,
    "Japanese": "いつも",
    "English": "always",
    "Ikema": "ちゃー",
    "target_cons": "ch",
    "vowel": "a",
    "quant": "short",
    "voicing": "vls",
    "poa": "alveolopalatal",
    "manner": "affricate",
    "carrier": "まさいがどぅ ちゃー てぃー はーらー",
    "japanese_sent": "まさいが「いつも」と言ったらしい。"
  },
  {
    "word_id": 7,
    "Japanese": "投げる",
    "English": "toss-pass",
    "Ikema": "ちゅー",
    "target_cons": "ch",
    "vowel": "u",
    "quant": "short",
    "voicing": "vls",
    "poa": "alveolopalatal",
    "manner": "affricate",
    "carrier": "まさいがどぅ ちゅー てぃー はーらー",
    "japanese_sent": "まさいが「投げる」と言ったらしい。"
  },
  {
    "word_id": 8,
    "Japanese": "食べる",
    "English": "to eat",
    "Ikema": "ふぁう",
    "target_cons": "f",
    "vowel": "a",
    "quant": "short",
    "voicing": "vls",
    "poa": "labiodental",
    "manner": "fricative",
    "carrier": "まさいがどぅ ふぁう てぃー はーらー",
    "japanese_sent": "まさいが「食べる」と言ったらしい。"
  },
  {
    "word_id": 9,
    "Japanese": "与える",
    "English": "to give (food)",
    "Ikema": "ふぃー",
    "target_cons": "f",
    "vowel": "i",
    "quant": "labiodental",
    "voicing": "vls",
    "poa": "alveolopalatal",
    "manner": "fricative",
    "carrier": "まさいがどぅ ふぃー てぃー はーらー",
    "japanese_sent": "まさいが「与える」と言ったらしい。"
  },
  {
    "word_id": 10,
    "Japanese": "振る",
    "English": "to wave",
    "Ikema": "ふい",
    "target_cons": "f",
    "vowel": "u",
    "quant": "labiodental",
    "voicing": "vls",
    "poa": "alveolopalatal",
    "manner": "fricative",
    "carrier": "まさいがどぅ ふい てぃー はーらー",
    "japanese_sent": "まさいが「振る」と言ったらしい。"
  },
  {
    "word_id": 11,
    "Japanese": "子供",
    "English": "kid",
    "Ikema": "っふぁ",
    "target_cons": "ff",
    "vowel": "a",
    "quant": "long",
    "voicing": "vls",
    "poa": "labiodental",
    "manner": "fricative",
    "carrier": "まさいがどぅ っふぁ てぃー はーらー",
    "japanese_sent": "まさいが「子供」と言ったらしい。"
  },
  {
    "word_id": 12,
    "Japanese": "墨",
    "English": "ink",
    "Ikema": "っふぃ",
    "target_cons": "ff",
    "vowel": "i",
    "quant": "long",
    "voicing": "vls",
    "poa": "labiodental",
    "manner": "fricative",
    "carrier": "まさいがどぅ っふぃ てぃー はーらー",
    "japanese_sent": "まさいが「墨」と言ったらしい。"
  },
  {
    "word_id": 13,
    "Japanese": "馬鹿野郎",
    "English": "you motherfucker",
    "Ikema": "っふた",
    "target_cons": "ff",
    "vowel": "u",
    "quant": "long",
    "voicing": "vls",
    "poa": "labiodental",
    "manner": "fricative",
    "carrier": "まさいがどぅ っふた てぃー はーらー",
    "japanese_sent": "まさいが「馬鹿野郎」と言ったらしい。"
  },
  {
    "word_id": 14,
    "Japanese": "門",
    "English": "door",
    "Ikema": "じゃう",
    "target_cons": "j",
    "vowel": "a",
    "quant": "short",
    "voicing": "vcd",
    "poa": "alveolopalatal",
    "manner": "affricate",
    "carrier": "まさいがどぅ じゃう てぃー はーらー",
    "japanese_sent": "まさいが「門」と言ったらしい。"
  },
  {
    "word_id": 15,
    "Japanese": "痔",
    "English": "hemorrhoids",
    "Ikema": "じー",
    "target_cons": "j",
    "vowel": "i",
    "quant": "short",
    "voicing": "vcd",
    "poa": "alveolopalatal",
    "manner": "affricate",
    "carrier": "まさいがどぅ じー てぃー はーらー",
    "japanese_sent": "まさいが「痔」と言ったらしい。"
  },
  {
    "word_id": 16,
    "Japanese": "尻尾",
    "English": "tail",
    "Ikema": "じゅー",
    "target_cons": "j",
    "vowel": "u",
    "quant": "short",
    "voicing": "vcd",
    "poa": "alveolar",
    "manner": "affricate",
    "carrier": "まさいがどぅ じゅー てぃー はーらー",
    "japanese_sent": "まさいが「尻尾」と言ったらしい。"
  },
  {
    "word_id": 17,
    "Japanese": "もらう",
    "English": "receive",
    "Ikema": "っじ",
    "target_cons": "jj",
    "vowel": "i",
    "quant": "long",
    "voicing": "vcd",
    "poa": "alveolopalatal",
    "manner": "affricate",
    "carrier": "まさいがどぅ っじ てぃー はーらー",
    "japanese_sent": "まさいが「もらう」と言ったらしい。"
  },
  {
    "word_id": 18,
    "Japanese": "火鉢",
    "English": "charcoal brazier",
    "Ikema": "っじゅ",
    "target_cons": "jj",
    "vowel": "u",
    "quant": "long",
    "voicing": "vcd",
    "poa": "alveolopalatal",
    "manner": "affricate",
    "carrier": "まさいがどぅ っじゅ てぃー はーらー",
    "japanese_sent": "まさいが「火鉢」と言ったらしい。"
  },
  {
    "word_id": 19,
    "Japanese": "井戸",
    "English": "well",
    "Ikema": "かー",
    "target_cons": "k",
    "vowel": "a",
    "quant": "short",
    "voicing": "vls",
    "poa": "velar",
    "manner": "stop",
    "carrier": "まさいがどぅ かー てぃー はーらー",
    "japanese_sent": "まさいが「井戸」と言ったらしい。"
  },
  {
    "word_id": 20,
    "Japanese": "切る",
    "English": "to cut",
    "Ikema": "きー",
    "target_cons": "k",
    "vowel": "i",
    "quant": "short",
    "voicing": "vls",
    "poa": "velar",
    "manner": "stop",
    "carrier": "まさいがどぅ きー てぃー はーらー",
    "japanese_sent": "まさいが「切る」と言ったらしい。"
  },
  {
    "word_id": 21,
    "Japanese": "最近",
    "English": "lately",
    "Ikema": "くぬい",
    "target_cons": "k",
    "vowel": "u",
    "quant": "short",
    "voicing": "vls",
    "poa": "velar",
    "manner": "stop",
    "carrier": "まさいがどぅ くぬい てぃー はーらー",
    "japanese_sent": "まさいが「最近」と言ったらしい。"
  },
  {
    "word_id": 22,
    "Japanese": "福木",
    "English": "Fukugi tree",
    "Ikema": "っくつぎー",
    "target_cons": "kk",
    "vowel": "u",
    "quant": "long",
    "voicing": "vcd",
    "poa": "velar",
    "manner": "stop",
    "carrier": "まさいがどぅ っくつぎー てぃー はーらー",
    "japanese_sent": "まさいが「福木」と言ったらしい。"
  },
  {
    "word_id": 23,
    "Japanese": "９つ",
    "English": "nie",
    "Ikema": "っくぬつ",
    "target_cons": "kk",
    "vowel": "u",
    "quant": "long",
    "voicing": "vls",
    "poa": "velar",
    "manner": "stop",
    "carrier": "まさいがどぅ っくぬつ てぃー はーらー",
    "japanese_sent": "まさいが「９つ」と言ったらしい。"
  },
  {
    "word_id": 24,
    "Japanese": "差",
    "English": "difference",
    "Ikema": "さー",
    "target_cons": "s",
    "vowel": "a",
    "quant": "short",
    "voicing": "vls",
    "poa": "alveolar",
    "manner": "fricative",
    "carrier": "まさいがどぅ さー てぃー はーらー",
    "japanese_sent": "まさいが「差」と言ったらしい。"
  },
  {
    "word_id": 25,
    "Japanese": "酸っぱい",
    "English": "sour",
    "Ikema": "そぅー",
    "target_cons": "s",
    "vowel": "u",
    "quant": "short",
    "voicing": "vls",
    "poa": "alveolar",
    "manner": "fricative",
    "carrier": "まさいがどぅ そぅー てぃー はーらー",
    "japanese_sent": "まさいが「酸っぱい」と言ったらしい。"
  },
  {
    "word_id": 26,
    "Japanese": "おしゃれな",
    "English": "fashionable",
    "Ikema": "しゃり",
    "target_cons": "sh",
    "vowel": "a",
    "quant": "short",
    "voicing": "vls",
    "poa": "alveolopalatal",
    "manner": "fricative",
    "carrier": "まさいがどぅ しゃり てぃー はーらー",
    "japanese_sent": "まさいが「おしゃれな」と言ったらしい。"
  },
  {
    "word_id": 27,
    "Japanese": "マグロ",
    "English": "tuna",
    "Ikema": "しび",
    "target_cons": "sh",
    "vowel": "i",
    "quant": "short",
    "voicing": "vls",
    "poa": "alveolopalatal",
    "manner": "fricative",
    "carrier": "まさいがどぅ しび てぃー はーらー",
    "japanese_sent": "まさいが「マグロ」と言ったらしい。"
  },
  {
    "word_id": 28,
    "Japanese": "役人",
    "English": "officer",
    "Ikema": "しゅー",
    "target_cons": "sh",
    "vowel": "u",
    "quant": "short",
    "voicing": "vls",
    "poa": "alveolopalatal",
    "manner": "fricative",
    "carrier": "まさいがどぅ しゅー てぃー はーらー",
    "japanese_sent": "まさいが「役人」と言ったらしい。"
  },
  {
    "word_id": 29,
    "Japanese": "草",
    "English": "grass",
    "Ikema": "っさ",
    "target_cons": "ss",
    "vowel": "a",
    "quant": "long",
    "voicing": "vls",
    "poa": "alveolar",
    "manner": "fricative",
    "carrier": "まさいがどぅ っさ てぃー はーらー",
    "japanese_sent": "まさいが「草」と言ったらしい。"
  },
  {
    "word_id": 30,
    "Japanese": "白い",
    "English": "white",
    "Ikema": "っそぅ",
    "target_cons": "ss",
    "vowel": "u",
    "quant": "long",
    "voicing": "vls",
    "poa": "alveolopalatal",
    "manner": "fricative",
    "carrier": "まさいがどぅ っそぅ てぃー はーらー",
    "japanese_sent": "まさいが「白い」と言ったらしい。"
  },
  {
    "word_id": 31,
    "Japanese": "汚い",
    "English": "dirty",
    "Ikema": "っしゃな",
    "target_cons": "ssh",
    "vowel": "a",
    "quant": "long",
    "voicing": "vls",
    "poa": "alveolopalatal",
    "manner": "fricative",
    "carrier": "まさいがどぅ っしゃな てぃー はーらー",
    "japanese_sent": "まさいが「汚い」と言ったらしい。"
  },
  {
    "word_id": 32,
    "Japanese": "トイレ",
    "English": "toilet",
    "Ikema": "っし",
    "target_cons": "ssh",
    "vowel": "i",
    "quant": "long",
    "voicing": "vls",
    "poa": "alveolopalatal",
    "manner": "fricative",
    "carrier": "まさいがどぅ っし てぃー はーらー",
    "japanese_sent": "まさいが「トイレ」と言ったらしい。"
  },
  {
    "word_id": 33,
    "Japanese": "相手をせずに置く",
    "English": "leave someone unattended",
    "Ikema": "っしゅーつ",
    "target_cons": "ssh",
    "vowel": "u",
    "quant": "long",
    "voicing": "vls",
    "poa": "alveolopalatal",
    "manner": "fricative",
    "carrier": "まさいがどぅ っしゅーつ てぃー はーらー",
    "japanese_sent": "まさいが「相手をせずに置く」と言ったらしい。"
  },
  {
    "word_id": 34,
    "Japanese": "熟睡している",
    "English": "asleep",
    "Ikema": "たーい",
    "target_cons": "t",
    "vowel": "a",
    "quant": "short",
    "voicing": "vls",
    "poa": "alveolar",
    "manner": "stop",
    "carrier": "まさいがどぅ たーい てぃー はーらー",
    "japanese_sent": "まさいが「熟睡している」と言ったらしい。"
  },
  {
    "word_id": 35,
    "Japanese": "手",
    "English": "hand",
    "Ikema": "てぃー",
    "target_cons": "t",
    "vowel": "i",
    "quant": "short",
    "voicing": "vls",
    "poa": "alveolar",
    "manner": "stop",
    "carrier": "まさいがどぅ てぃー てぃー はーらー",
    "japanese_sent": "まさいが「手」と言ったらしい。"
  },
  {
    "word_id": 36,
    "Japanese": "十",
    "English": "ten",
    "Ikema": "とぅー",
    "target_cons": "t",
    "vowel": "u",
    "quant": "short",
    "voicing": "vls",
    "poa": "alveolar",
    "manner": "stop",
    "carrier": "まさいがどぅ とぅー てぃー はーらー",
    "japanese_sent": "まさいが「十」と言ったらしい。"
  },
  {
    "word_id": 37,
    "Japanese": "舌",
    "English": "tongue",
    "Ikema": "った",
    "target_cons": "tt",
    "vowel": "a",
    "quant": "long",
    "voicing": "vls",
    "poa": "alveolar",
    "manner": "stop",
    "carrier": "まさいがどぅ った てぃー はーらー",
    "japanese_sent": "まさいが「舌」と言ったらしい。"
  },
  {
    "word_id": 38,
    "Japanese": "キセル",
    "English": "Japanese tobacco pipe",
    "Ikema": "ってぃー",
    "target_cons": "tti",
    "vowel": "i",
    "quant": "long",
    "voicing": "vls",
    "poa": "alveolar",
    "manner": "stop",
    "carrier": "まさいがどぅ ってぃー てぃー はーらー",
    "japanese_sent": "まさいが「キセル」と言ったらしい。"
  },
  {
    "word_id": 39,
    "Japanese": "あなた",
    "English": "you",
    "Ikema": "っゔぁ",
    "target_cons": "vv",
    "vowel": "a",
    "quant": "long",
    "voicing": "vcd",
    "poa": "labiodental",
    "manner": "fricative",
    "carrier": "まさいがどぅ っゔぁ てぃー はーらー",
    "japanese_sent": "まさいが「あなた」と言ったらしい。"
  },
  {
    "word_id": 40,
    "Japanese": "売って",
    "English": "sell_indef",
    "Ikema": "っゔぃ",
    "target_cons": "vv",
    "vowel": "i",
    "quant": "long",
    "voicing": "vcd",
    "poa": "labiodental",
    "manner": "fricative",
    "carrier": "まさいがどぅ っゔぃ てぃー はーらー",
    "japanese_sent": "まさいが「売って」と言ったらしい。"
  },
  {
    "word_id": 41,
    "Japanese": "売れ",
    "English": "sell_impr",
    "Ikema": "っゔぃ",
    "target_cons": "vv",
    "vowel": "i",
    "quant": "long",
    "voicing": "vls",
    "poa": "labiodental",
    "manner": "fricative",
    "carrier": "まさいがどぅ っゔぃ てぃー はーらー",
    "japanese_sent": "まさいが「売れ」と言ったらしい。"
  },
  {
    "word_id": 42,
    "Japanese": "しみる",
    "English": "That sour taste goes right through my teeth",
    "Ikema": "っゔゅー",
    "target_cons": "vv",
    "vowel": "u",
    "quant": "long",
    "voicing": "vls",
    "poa": "labiodental",
    "manner": "fricative",
    "carrier": "まさいがどぅ っゔゅー てぃー はーらー",
    "japanese_sent": "まさいが「しみる」と言ったらしい。"
  },
  {
    "word_id": 43,
    "Japanese": "父",
    "English": "father",
    "Ikema": "っざ",
    "target_cons": "zz",
    "vowel": "a",
    "quant": "long",
    "voicing": "vcd",
    "poa": "alveolar",
    "manner": "fricative",
    "carrier": "まさいがどぅ っざ てぃー はーらー",
    "japanese_sent": "まさいが「父」と言ったらしい。"
  },
  {
    "word_id": 44,
    "Japanese": "魚",
    "English": "fish",
    "Ikema": "っぞぅ",
    "target_cons": "zz",
    "vowel": "u",
    "quant": "long",
    "voicing": "vcd",
    "poa": "alveolar",
    "manner": "fricative",
    "carrier": "まさいがどぅ っぞぅ てぃー はーらー",
    "japanese_sent": "まさいが「魚」と言ったらしい。"
  }
];

// ==========================================================================
// Application State Variables
// ==========================================================================
let state = {
  participantId: 'P01',
  orderType: 'block-random',
  activeTheme: 'light',
  slides: [],
  currentSlideIndex: 0,
  startTime: null,
  endTime: null,
  slideLogs: [] // Detailed logs of presentation events
};

let currentSlideStartTime = null;

// ==========================================================================
// Utility Functions
// ==========================================================================

// Standard Fisher-Yates shuffle algorithm
function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Generate the presentation slides based on the selected order type
function generateSlides(stimuli, orderType) {
  let list = [];
  
  if (orderType === 'block-random') {
    // Repetition 1: Shuffled
    const block1 = shuffle(stimuli).map(item => ({ item, blockNum: 1 }));
    // Repetition 2: Shuffled independently
    const block2 = shuffle(stimuli).map(item => ({ item, blockNum: 2 }));
    list = [...block1, ...block2];
  } else if (orderType === 'full-random') {
    // Two repetitions combined, then shuffled as one large block
    const allItems = [
      ...stimuli.map(item => ({ item, blockNum: 1 })),
      ...stimuli.map(item => ({ item, blockNum: 2 }))
    ];
    list = shuffle(allItems);
  } else {
    // Sequential: Block 1 (1 to 44) followed by Block 2 (1 to 44)
    const block1 = stimuli.map(item => ({ item, blockNum: 1 }));
    const block2 = stimuli.map(item => ({ item, blockNum: 2 }));
    list = [...block1, ...block2];
  }
  
  return list;
}

// Format duration from milliseconds to mm:ss
function formatDuration(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// ==========================================================================
// Theme Manager
// ==========================================================================
function setTheme(themeName) {
  state.activeTheme = themeName;
  document.body.className = ''; // Reset classes
  document.body.classList.add(`theme-${themeName}`);
  
  // Update button active state in DOM
  document.querySelectorAll('.theme-btn').forEach(btn => {
    if (btn.getAttribute('data-theme') === themeName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ==========================================================================
// Slide Navigation and Rendering
// ==========================================================================
const carrierEl = document.getElementById('carrier-text');
const translationEl = document.getElementById('translation-text');
const cardEl = document.getElementById('stimulus-card');

function fitElementToLine(element, minimumFontSize = 17.6, maxPasses = 5) {
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

function fitCarrierToLine() {
  fitElementToLine(carrierEl, 14);
  fitElementToLine(translationEl, 12);
}

function scheduleFitForStimulus() {
  requestAnimationFrame(fitCarrierToLine);
  setTimeout(fitCarrierToLine, 80);
  setTimeout(fitCarrierToLine, 220);
}

function renderSlide(index) {
  const currentSlide = state.slides[index];
  const item = currentSlide.item;
  
  // Update UI Elements
  carrierEl.textContent = item.carrier;
  translationEl.textContent = item.japanese_sent;
  scheduleFitForStimulus();
  
  // Update Header Metadata
  document.getElementById('current-slide-num').textContent = index + 1;
  document.getElementById('display-block-num').textContent = `${currentSlide.blockNum}/2`;
  
  // Progress Bar
  const progressPercent = ((index) / state.slides.length) * 100;
  document.getElementById('progress-bar').style.width = `${progressPercent}%`;
  
  // Researcher Metadata (subtle tags)
  document.getElementById('meta-word').textContent = `Target: ${item.Ikema}`;
  document.getElementById('meta-cons').textContent = `Cons: ${item.target_cons}`;
  document.getElementById('meta-quant').textContent = `Quant: ${item.quant}`;
  
  // Disable / Enable Back button appropriately
  const prevBtn = document.getElementById('prev-btn');
  if (index === 0) {
    prevBtn.disabled = true;
    prevBtn.style.opacity = '0.5';
    prevBtn.style.pointerEvents = 'none';
  } else {
    prevBtn.disabled = false;
    prevBtn.style.opacity = '1';
    prevBtn.style.pointerEvents = 'auto';
  }
  
  // Update Slide transition animation
  cardEl.classList.remove('slide-fade-in');
  void cardEl.offsetWidth; // Trigger reflow to restart animation
  cardEl.classList.add('slide-fade-in');
  
  // Record current slide display start timestamp
  currentSlideStartTime = performance.now();
  
  // Log display event
  const logEntry = {
    slideIndex: index + 1,
    wordId: item.word_id,
    targetWord: item.Ikema,
    repetition: currentSlide.blockNum,
    carrierText: item.carrier,
    translationText: item.japanese_sent,
    displayTimestamp: new Date().toISOString(),
    durationMs: null
  };
  
  // Save or overwrite this log entry (in case participant navigated back and re-entered this slide)
  state.slideLogs[index] = logEntry;
}

function nextSlide() {
  // If we are currently on a slide, record the duration spent on it
  if (currentSlideStartTime !== null) {
    const duration = performance.now() - currentSlideStartTime;
    if (state.slideLogs[state.currentSlideIndex]) {
      state.slideLogs[state.currentSlideIndex].durationMs = Math.round(duration);
    }
  }
  
  cardEl.classList.add('slide-fade-out');
  
  setTimeout(() => {
    cardEl.classList.remove('slide-fade-out');
    if (state.currentSlideIndex < state.slides.length - 1) {
      state.currentSlideIndex++;
      renderSlide(state.currentSlideIndex);
    } else {
      finishExperiment();
    }
  }, 150); // Matches the exit transition duration
}

function prevSlide() {
  if (state.currentSlideIndex > 0) {
    // Record duration for current slide before navigating back
    if (currentSlideStartTime !== null) {
      const duration = performance.now() - currentSlideStartTime;
      if (state.slideLogs[state.currentSlideIndex]) {
        state.slideLogs[state.currentSlideIndex].durationMs = Math.round(duration);
      }
    }
    
    cardEl.classList.add('slide-fade-out');
    
    setTimeout(() => {
      cardEl.classList.remove('slide-fade-out');
      state.currentSlideIndex--;
      renderSlide(state.currentSlideIndex);
    }, 150);
  }
}

// ==========================================================================
// Screen Transitions
// ==========================================================================
function switchScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
    screen.style.display = 'none';
  });
  
  const targetScreen = document.getElementById(screenId);
  targetScreen.style.display = 'flex';
  
  // Small delay to trigger CSS transition smoothly
  setTimeout(() => {
    targetScreen.classList.add('active');
    if (screenId === 'experiment-screen') scheduleFitForStimulus();
  }, 50);
}

function startExperiment() {
  // Read URL Query Parameters (allows researchers to set conditions in URL, e.g. ?id=P05&order=sequential)
  const urlParams = new URLSearchParams(window.location.search);
  const partParam = urlParams.get('id');
  const orderParam = urlParams.get('order');

  // Read Configurations (falls back to URL param, then element value, then default)
  const partInput = document.getElementById('participant-id') ? document.getElementById('participant-id').value.trim() : 'P01';
  state.participantId = partParam || partInput || 'P01';
  
  const orderInput = document.getElementById('presentation-order') ? document.getElementById('presentation-order').value : 'block-random';
  state.orderType = orderParam || orderInput || 'block-random';
  
  // Set display properties
  document.getElementById('display-participant-id').textContent = state.participantId;
  document.getElementById('total-slide-num').textContent = STIMULI.length * 2;
  
  // Shuffle and set presentation queue
  state.slides = generateSlides(STIMULI, state.orderType);
  state.currentSlideIndex = 0;
  state.slideLogs = new Array(state.slides.length);
  
  // Timestamps
  state.startTime = performance.now();
  
  // Screen transition
  switchScreen('experiment-screen');
  
  // Render first slide
  renderSlide(0);
}

function finishExperiment() {
  state.endTime = performance.now();
  const elapsedMs = state.endTime - state.startTime;
  
  // Set statistics on completion page
  document.getElementById('result-participant-id').textContent = state.participantId;
  
  let orderStr = 'ブロック・ランダム化';
  if (state.orderType === 'full-random') orderStr = '完全ランダム化';
  if (state.orderType === 'sequential') orderStr = 'シーケンシャル（順番通り）';
  
  document.getElementById('result-order-type').textContent = orderStr;
  document.getElementById('result-total-slides').textContent = `${state.slides.length} / ${state.slides.length}`;
  document.getElementById('result-duration').textContent = formatDuration(elapsedMs);
  
  // Transition to completion page
  switchScreen('completion-screen');
}

// ==========================================================================
// CSV Data Exporter
// ==========================================================================
function exportLogsToCSV() {
  // Header Columns
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "SlideNumber,ParticipantID,OrderType,WordID,TargetWord,Repetition,CarrierText,TranslationText,DisplayTimestamp,DurationMs\n";
  
  state.slideLogs.forEach((log) => {
    if (!log) return;
    
    // Sanitize string text (wrap in quotes, escape existing quotes)
    const sanitize = (text) => {
      if (text === null || text === undefined) return '';
      const str = String(text);
      return `"${str.replace(/"/g, '""')}"`;
    };
    
    const row = [
      log.slideIndex,
      sanitize(state.participantId),
      sanitize(state.orderType),
      log.wordId,
      sanitize(log.targetWord),
      log.repetition,
      sanitize(log.carrierText),
      sanitize(log.translationText),
      sanitize(log.displayTimestamp),
      log.durationMs || 0
    ].join(",");
    
    csvContent += row + "\n";
  });
  
  // Trigger file download in browser
  const encodedUri = encodeURI(csvContent);
  const downloadLink = document.createElement("a");
  const filename = `experiment_log_${state.participantId}_${new Date().toISOString().slice(0,10)}.csv`;
  
  downloadLink.setAttribute("href", encodedUri);
  downloadLink.setAttribute("download", filename);
  document.body.appendChild(downloadLink);
  
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

// ==========================================================================
// Event Listeners Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Theme selection buttons
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedTheme = e.target.getAttribute('data-theme');
      setTheme(selectedTheme);
      scheduleFitForStimulus();
    });
  });
  
  // Navigation Buttons
  document.getElementById('start-btn').addEventListener('click', startExperiment);
  document.getElementById('next-btn').addEventListener('click', nextSlide);
  document.getElementById('prev-btn').addEventListener('click', prevSlide);
  document.getElementById('restart-btn').addEventListener('click', () => {
    switchScreen('setup-screen');
  });
  document.getElementById('download-log-btn').addEventListener('click', exportLogsToCSV);
  
  // Keyboard Navigation Events
  document.addEventListener('keydown', (e) => {
    // Only intercept keys when the experiment screen is actively shown
    const experimentScreen = document.getElementById('experiment-screen');
    if (experimentScreen.classList.contains('active')) {
      if (e.code === 'Space' || e.key === ' ' || e.key === 'ArrowRight') {
        e.preventDefault(); // Prevent page scroll on Spacebar
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    }
  });
  window.addEventListener('resize', () => {
    if (document.getElementById('experiment-screen').classList.contains('active')) scheduleFitForStimulus();
  });

  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      if (document.getElementById('experiment-screen').classList.contains('active')) scheduleFitForStimulus();
    });
  }
});
