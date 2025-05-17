// Smooth scroll for all anchor links with hashes
document.querySelectorAll('nav ul li a[href^="#"], nav ul li a[href$=".html"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');

    if (target.startsWith('#')) {
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      // For page links, just navigate normally
      window.location.href = target;
    }
  });
});


