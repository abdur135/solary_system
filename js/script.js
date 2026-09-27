// ===== Inisialisasi AOS Animation =====
AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

// ===== Animasi Bintang Latar Belakang =====
function createStars() {
  const container = document.getElementById('stars-container');
  if (!container) return;
  const starCount = 200;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 3 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
    star.style.animationDelay = Math.random() * 5 + 's';
    container.appendChild(star);
  }
}
createStars();

// ===== Smooth Scroll untuk semua link internal =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Audio Background =====
const bgMusic = document.getElementById('bgMusic');

function startMusic() {
  if (bgMusic) {
    bgMusic.volume = 0.3;
    bgMusic.play().catch(() => {});
  }
}

function stopMusic() {
  if (bgMusic) {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  }
}

document.addEventListener('DOMContentLoaded', startMusic);

// ===== Video-Music Interaction (video.html) =====
const solarVideo = document.getElementById('solarVideo');
if (solarVideo) {
  solarVideo.addEventListener('play', stopMusic);
  solarVideo.addEventListener('pause', startMusic);
  solarVideo.addEventListener('ended', startMusic);
}

// ===== Navbar Active Link =====
document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});

// ===== Navbar Hide on Scroll =====
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';
  }
  lastScrollTop = scrollTop;
});
