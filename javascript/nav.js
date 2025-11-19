// nav.js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('navLinks');

  if (!hamburger || !navLinks) return;

  // Toggle menu
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

  // Optional: close menu when a link is clicked (for mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
      }
    });
  });
});


