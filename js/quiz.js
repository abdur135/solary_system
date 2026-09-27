// ===== Data Soal Kuis =====
const quizData = [
  {
    question: 'Apa nama planet terdekat dengan Matahari?',
    options: ['Venus', 'Merkurius', 'Bumi', 'Mars'],
    correct: 1
  },
  {
    question: 'Berapa lama Bumi mengelilingi Matahari (revolusi)?',
    options: ['30 hari', '365,25 hari', '88 hari', '687 hari'],
    correct: 1
  },
  {
    question: 'Planet mana yang dikenal sebagai Planet Merah?',
    options: ['Venus', 'Jupiter', 'Mars', 'Saturnus'],
    correct: 2
  },
  {
    question: 'Apa planet terbesar dalam tata surya?',
    options: ['Saturnus', 'Neptunus', 'Uranus', 'Jupiter'],
    correct: 3
  },
  {
    question: 'Planet apa yang memiliki cincin paling terkenal?',
    options: ['Jupiter', 'Uranus', 'Saturnus', 'Neptunus'],
    correct: 2
  },
  {
    question: 'Berapa jumlah planet dalam tata surya?',
    options: ['7', '8', '9', '10'],
    correct: 1
  },
  {
    question: 'Apa nama satelit alami Bumi?',
    options: ['Mars', 'Venus', 'Bulan', 'Matahari'],
    correct: 2
  },
  {
    question: 'Planet mana yang berotasi paling cepat?',
    options: ['Bumi', 'Mars', 'Jupiter', 'Saturnus'],
    correct: 2
  },
  {
    question: 'Apa planet terjauh dari Matahari?',
    options: ['Uranus', 'Neptunus', 'Saturnus', 'Pluto'],
    correct: 1
  },
  {
    question: 'Fenomena apa yang menyebabkan siang dan malam?',
    options: ['Revolusi Bumi', 'Rotasi Bumi', 'Gravitasi Bulan', 'Gerhana'],
    correct: 1
  }
];

// ===== Variabel Global =====
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

// ===== Render Soal =====
function renderQuestion() {
  const container = document.getElementById('quizContent');
  const data = quizData[currentQuestion];

  let html = `
    <div class="quiz-card" data-aos="fade-up">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-warning fw-bold">Soal ${currentQuestion + 1} dari ${quizData.length}</span>
        <span class="text-light">Skor: ${score}</span>
      </div>
      <div class="progress mb-4" style="height: 6px;">
        <div class="progress-bar bg-warning" style="width: ${((currentQuestion + 1) / quizData.length) * 100}%"></div>
      </div>
      <p class="quiz-question">${data.question}</p>
      <div class="quiz-options">
  `;

  data.options.forEach((option, index) => {
    const isSelected = userAnswers[currentQuestion] === index;
    html += `
      <div class="form-check" onclick="selectAnswer(${index})">
        <input class="form-check-input" type="radio" name="quizOption" value="${index}" id="option${index}" ${isSelected ? 'checked' : ''}>
        <label class="form-check-label" for="option${index}">
          ${String.fromCharCode(65 + index)}. ${option}
        </label>
      </div>
    `;
  });

  html += `
      </div>
      <div class="d-flex justify-content-between mt-4">
        <button class="btn btn-outline-light" onclick="prevQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>
          <i class="fas fa-arrow-left me-1"></i>Sebelumnya
        </button>
        ${currentQuestion < quizData.length - 1
          ? `<button class="btn btn-warning text-dark fw-bold" onclick="nextQuestion()">Selanjutnya<i class="fas fa-arrow-right ms-1"></i></button>`
          : `<button class="btn btn-success fw-bold" onclick="submitQuiz()"><i class="fas fa-check me-1"></i>Selesai</button>`
        }
      </div>
    </div>
  `;

  container.innerHTML = html;
  AOS.refresh();
}

// ===== Pilih Jawaban =====
function selectAnswer(index) {
  userAnswers[currentQuestion] = index;
  const radios = document.querySelectorAll('input[name="quizOption"]');
  radios.forEach((radio, i) => {
    radio.checked = i === index;
  });
}

// ===== Soal Sebelumnya =====
function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

// ===== Soal Selanjutnya =====
function nextQuestion() {
  if (userAnswers[currentQuestion] === undefined) {
    alert('Pilih jawaban terlebih dahulu!');
    return;
  }
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    renderQuestion();
  }
}

// ===== Submit Kuis =====
function submitQuiz() {
  if (userAnswers[currentQuestion] === undefined) {
    alert('Pilih jawaban terlebih dahulu!');
    return;
  }

  // Hitung skor
  score = 0;
  quizData.forEach((data, index) => {
    if (userAnswers[index] === data.correct) {
      score++;
    }
  });

  showResult();
}

// ===== Tampilkan Hasil =====
function showResult() {
  const container = document.getElementById('quizContent');

  let html = `
    <div class="quiz-card" data-aos="zoom-in">
      <div class="quiz-result">
        <i class="fas fa-star" style="font-size: 3rem; color: #f39c12;"></i>
        <div class="score-label mt-2">Skor Anda</div>
        <div class="score">${score} / ${quizData.length}</div>
        <p class="mt-2">${getGradeMessage(score)}</p>
      </div>
      <hr class="text-light opacity-25">
      <h5 class="text-warning mb-3"><i class="fas fa-list me-2"></i>Pembahasan Jawaban</h5>
  `;

  quizData.forEach((data, index) => {
    const userAns = userAnswers[index] !== undefined ? userAnswers[index] : -1;
    const isCorrect = userAns === data.correct;
    const userAnswerText = userAns >= 0 ? data.options[userAns] : 'Tidak dijawab';
    const correctText = data.options[data.correct];

    html += `
      <div class="mb-3 p-3 rounded ${isCorrect ? 'correct-answer' : 'wrong-answer'}">
        <p class="fw-bold mb-1">${index + 1}. ${data.question}</p>
        <p class="mb-0 ${isCorrect ? 'correct-badge' : 'wrong-badge'}">
          <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'} me-1"></i>
          Jawaban Anda: ${userAnswerText}
        </p>
        ${!isCorrect ? `<p class="mb-0 correct-badge"><i class="fas fa-check-circle me-1"></i>Jawaban Benar: ${correctText}</p>` : ''}
      </div>
    `;
  });

  html += `
      <div class="text-center mt-4">
        <button class="btn btn-start" onclick="resetQuiz()">
          <i class="fas fa-redo me-2"></i>Ulangi Kuis
        </button>
      </div>
    </div>
  `;

  container.innerHTML = html;
  AOS.refresh();
}

// ===== Pesan Nilai =====
function getGradeMessage(score) {
  const total = quizData.length;
  const percent = (score / total) * 100;
  if (percent === 100) return 'Sempurna! Anda ahli tata surya!';
  if (percent >= 80) return 'Luar biasa! Pengetahuan Anda sangat baik.';
  if (percent >= 60) return 'Bagus! Terus belajar dan tingkatkan.';
  if (percent >= 40) return 'Cukup. Pelajari lagi materi tentang tata surya.';
  return 'Ayo belajar lagi! Baca materi di halaman Planet.';
}

// ===== Reset Kuis =====
function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  renderQuestion();
}

// ===== Mulai Kuis saat halaman dimuat =====
document.addEventListener('DOMContentLoaded', function () {
  renderQuestion();
});
