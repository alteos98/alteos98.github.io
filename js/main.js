$(function() {
  const body = document.querySelector('body');
  const toggle = document.getElementById('toggle');
  const input = document.getElementById('switch');

  toggle.addEventListener('click', function() {
    const isChecked = input.checked;
    if (isChecked) {
      body.classList.remove('night');
    } else {
      body.classList.add('night');
    }
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3,
  });

  sr.reveal('.about-me');
  sr.reveal('.skills');
  sr.reveal('.experience', { viewFactor: 0.2 });
  sr.reveal('.my-projects', { viewFactor: 0.05 });
});
