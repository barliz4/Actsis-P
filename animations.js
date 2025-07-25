// espera a que cargue el DOM
document.addEventLinstener('DOMContentLoaded', () => {
    const cartas = document.querySelectorAll('.carta');

    const animarSiVisible = () => {         //funciones
        cartas.forEach(carta => {
            const react = carta.getBoudingClientReact();
            const estaVisible = react.top < window.innerHeight - 100;
            if (estaVisible) {
            carta.classList.add('animada');
      }
    });
  };

  //Ejecutar al cargar y y al hacer scroll
  window.addEventListener('scroll', animarSiVisible);
  animarSiVisible();
});

