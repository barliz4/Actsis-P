document.querySelectorAll('.blog-card').forEach(card => {
    const leerMasBtn = card.querySelector('.btn:not(.volver)');
    const volverBtn = card.querySelector('.btn.volver');

    leerMasBtn.addEventListener('click', e => {
      e.preventDefault();
      card.classList.add('flipped');
    });

    volverBtn.addEventListener('click', e => {
      e.preventDefault();
      card.classList.remove('flipped');
    });
  });
