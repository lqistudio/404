// ==========================
// Animación neon flotante para 404
// ==========================
const error404 = document.querySelector('#error-404 h1');
if (error404) {
  let glow = 0;
  let increment = 0.05;

  function animate404() {
    glow += increment;
    if (glow >= 1 || glow <= 0) increment *= -1;
    error404.style.textShadow = `
      0 0 ${10 + glow * 20}px #f00,
      0 0 ${20 + glow * 40}px #ff0,
      0 0 ${30 + glow * 60}px #f00
    `;
    requestAnimationFrame(animate404);
  }

  animate404();
}

// ==========================
// Botones neon hover efecto
// ==========================
const neonLinks = document.querySelectorAll('#error-404 a, .social-list li a');
neonLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.boxShadow = '0 0 30px #0ff, 0 0 60px #00f';
    link.style.transform = 'translateY(-3px) scale(1.05)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.boxShadow = '0 0 15px #0ff, inset 0 0 8px #00f';
    link.style.transform = 'none';
  });
});

// ==========================
// Header flotante
// ==========================
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    header.classList.add('scrolled', 'show');
  } else {
    header.classList.remove('scrolled', 'show');
  }
});

// ==========================
// Modal para futuras imágenes/videos
// ==========================
const modal = document.querySelector('.modal');
if (modal) {
  const modalImg = document.createElement('img');
  modalImg.classList.add('modal-inner');
  modal.appendChild(modalImg);

  const closeModal = modal.querySelector('.close');
  if (closeModal) {
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
      modalImg.src = '';
    });
  }

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modalImg.src = '';
    }
  });
}
