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
