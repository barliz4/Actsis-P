// ------------------------------------------------------ CARRUSEL, SERVICIOS --------------------------------------- -- //
const slidesContainer = document.querySelector(".slides_container");
const btnLeft = document.querySelector(".btn-carrusel.left");
const btnRight = document.querySelector(".btn-carrusel.right");

btnRight.addEventListener("click", () => {
  slidesContainer.scrollBy({ left: 300, behavior: "smooth" });
});

btnLeft.addEventListener("click", () => {
  slidesContainer.scrollBy({ left: -300, behavior: "smooth" });
});

// ------------------------------------------------------ ENVIO FORMULARIO --------------------------------------- -- //
document.querySelector(".formulario_contacto").addEventListener("submit", function(e) {
  e.preventDefault();

  let campos = document.querySelectorAll(".campo input, .campo textarea");
  let valido = true;

  campos.forEach(campo => {
    if (campo.value.trim() === "") {
      campo.style.border = "2px solid red";
      valido = false;
    } else {
      campo.style.border = "2px solid green";
    }
  });

  if (valido) {
    alert("Formulario enviado correctamente ✅");
    this.reset();
  } else {
    alert("Por favor completa todos los campos ❌");
  }
});


// ------------------------------------------------------ NAV BAR, HACER SCROL --------------------------------------- -- //

// Selecciona todos los enlaces <a> cuyo atributo href comience con "#" 
// (es decir, los que apuntan a una sección dentro de la misma página)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  
  // A cada enlace encontrado, le agregamos un "escuchador" de eventos (event listener)
  // que se ejecuta cuando el usuario hace clic en él.
  anchor.addEventListener('click', function(e) {
    
    // Previene el comportamiento por defecto del navegador,
    // que sería saltar directamente al elemento sin animación.
    e.preventDefault();

    // Obtiene el elemento de destino en el DOM a partir del valor del href.
    // Ejemplo: si el enlace es <a href="#contacto">, busca el elemento con id="contacto".
    const destino = document.querySelector(this.getAttribute('href'));
    
    // Realiza el desplazamiento suave hacia el elemento destino.
    // - behavior: 'smooth' → activa el scroll animado
    // - block: 'start' → alinea el inicio (top) de la sección con la parte superior de la ventana
    destino.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


// Animación de entrada al hacer scroll
const elementos = document.querySelectorAll('.animar');

function mostrarAnimacion() {
  elementos.forEach(el => {
    const posicion = el.getBoundingClientRect().top;
    const alturaPantalla = window.innerHeight - 100;
    if (posicion < alturaPantalla) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', mostrarAnimacion);
mostrarAnimacion();
