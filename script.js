const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const iconSun = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');

function updateToggleIcon(theme) {
  if (theme === 'dark') {
    iconSun.classList.remove('hidden');
    iconMoon.classList.add('hidden');
  } else {
    iconSun.classList.add('hidden');
    iconMoon.classList.remove('hidden');
  }
}

function applyTheme(theme) {
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
  updateToggleIcon(theme);
}

(function initTheme() {
  const isDark = root.classList.contains('dark');
  updateToggleIcon(isDark ? 'dark' : 'light');
})();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = root.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
  });
}

document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('hidden');
});

document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    const parent = btn.closest('.accordion');
    const isOpen = parent.classList.contains('accordion-open');
    document.querySelectorAll('.accordion').forEach(a => {
      a.classList.remove('accordion-open');
      a.querySelector('.accordion-content').style.maxHeight = null;
    });
    if (!isOpen) {
      parent.classList.add('accordion-open');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('hidden');
  });
});


