// Función con ease-out para que la animación sea más suave.
function animarContador(elemento, valorFinal, duracion, sufijo = "") {
  let inicio = 0;
  let tiempoInicio = null;

  function easeOutQuad(t) {
    return t * (2 - t); // curva de aceleración -> desaceleración
  }

  function animacion(timestamp) {
    if (!tiempoInicio) tiempoInicio = timestamp;
    let progreso = (timestamp - tiempoInicio) / duracion;
    progreso = Math.min(progreso, 1);

    let valor = Math.floor(easeOutQuad(progreso) * valorFinal);
    elemento.textContent = valor.toLocaleString("es-CO") + sufijo;

    if (progreso < 1) {
      requestAnimationFrame(animacion);
    }
  }

  requestAnimationFrame(animacion);
}

// Animar los <h3> de las cifras
document.querySelectorAll(".cifra h3").forEach(h3 => {
  let texto = h3.textContent;
  let numero = parseInt(texto.replace(/\D/g, "")) || 0;

  if (numero > 0) {
    let sufijo = texto.includes("M") ? "M+" : "+"; // Maneja el caso de 3M+
    animarContador(h3, numero, 2000, sufijo);
  }
});

// Animar también los elementos con clase .contador
document.querySelectorAll(".contador").forEach(counter => {
  let valorFinal = +counter.getAttribute("data-target") || 0;
  if (valorFinal > 0) {
    animarContador(counter, valorFinal, 2000);
  }
});



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
