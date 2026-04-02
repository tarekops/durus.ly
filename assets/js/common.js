
document.addEventListener('DOMContentLoaded', () => {
  const marker = document.querySelector('[data-current-page]');
  const current = marker?.dataset.currentPage;
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.dataset.page === current) a.classList.add('active');
  });

  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  const input = document.querySelector('[data-filter-input]');
  if (input) {
    input.addEventListener('input', () => {
      const query = input.value.trim().toLowerCase();
      document.querySelectorAll('[data-filter-card]').forEach(card => {
        const text = (card.dataset.keywords || card.innerText).toLowerCase();
        card.style.display = text.includes(query) ? '' : 'none';
      });
    });
  }
});
