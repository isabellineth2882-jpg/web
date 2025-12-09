
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  loader.style.transition = 'opacity .45s ease';
  loader.style.opacity = '0';
  setTimeout(() => { loader.remove(); }, 500);
});


(function(){
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    
    reveals.forEach(r => r.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {threshold: 0.15});
  reveals.forEach(r => io.observe(r));
})();


const form = document.getElementById('contact-form') || document.querySelector('#contacto form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    if (!btn) return;
    btn.classList.add('pulsing');
    btn.disabled = true;
    
    const original = btn.textContent;
    btn.textContent = 'Enviando...';
    setTimeout(() => {
      btn.textContent = '¡Enviado ✓';
      btn.classList.remove('pulsing');
      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = original;
      }, 1800);
    }, 900);
  });
}


document.querySelectorAll('.galeria img').forEach(img => {
  img.addEventListener('click', () => {
    const lb = document.createElement('div');
    lb.id = 'lightbox';
    const big = document.createElement('img');
    big.src = img.src;
    big.alt = img.alt || '';
    lb.appendChild(big);
    lb.addEventListener('click', () => lb.remove());
    document.body.appendChild(lb);
  });
});
