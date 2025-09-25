// ==========================
// HUD flotante al hacer scroll
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
// Animación tarjetas visibles al hacer scroll
// ==========================
const projectCards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

projectCards.forEach(card => observer.observe(card));

// ==========================
// Modal para imágenes y videos
// ==========================
const modal = document.querySelector('.modal');
const modalImg = document.createElement('img');
modalImg.classList.add('modal-inner');
modal.appendChild(modalImg);

const closeModal = modal.querySelector('.close');

document.querySelectorAll('.project-card img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalImg.src = '';
});

modal.addEventListener('click', e => {
  if(e.target === modal) {
    modal.style.display = 'none';
    modalImg.src = '';
  }
});

// ==========================
// Evitar enlaces rotos en 404
// ==========================
if(document.querySelector('#error-404')){
  console.log("404 Page: check links and go back home!");
}
