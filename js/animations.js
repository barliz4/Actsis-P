// ------------------------------------------------------ Nav bar, hamburger--------------------------------------- -- //
// Seleccionamos elementos
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

// Evento click
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active"); // agrega o quita la clase
});

// ------------------------------------------------------  --------------------------------------- -- //
// Función con ease-out para que la animación sea más suave
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
  slidesContainer.scrollBy({ left: 1210, behavior: "smooth" });
});

btnLeft.addEventListener("click", () => {
  slidesContainer.scrollBy({ left: -1210, behavior: "smooth" });
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

// selecciona todos los enlaces <a> cuyo atributo href comience con "#" 
// (es decir, los que apuntan a una sección dentro de la misma página)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  
  // A cada enlace encontrado, se le agrega un "escuchador" de eventos (event listener)
  // que se ejecuta cuando el usuario hace clic en el.
  anchor.addEventListener('click', function(e) {
    
    // Previene el comportamiento por defecto del navegador,
    // que sería saltar directamente al elemento sin animación.
    e.preventDefault();

    // Obtiene el elemento de destino en el DOM a partir del valor del href.
    // Ejemplo: si el enlace es <a href="#contacto">, busca el elemento con id="contacto".
    const destino = document.querySelector(this.getAttribute('href'));
    
    // realiza el desplazamiento suave hacia el elemento destino.
    // - behavior: 'smooth' → activa el scroll animado
    // - block: 'start' → alinea el inicio (top) de la sección con la parte superior de la ventana
    destino.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});


// animación de entrada al hacer scroll
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

// ------------------------------------------------------ FORMULARIO --------------------------------------- -- //

function guardarFormulario(event) {
  event.preventDefault(); // evita recargar la página

  const datos = {
    nombre: document.getElementById('nombre').value,
    correo: document.getElementById('correo').value,
    telefono: document.getElementById('telefono').value,
    asunto: document.getElementById('asunto').value,
    mensaje: document.getElementById('mensaje').value
  };

  // Guardamos los datos en un archivo temporal local (JSON)
  fetch('http://localhost:8000/guardar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)
  })
  .then(res => res.text())
  .then(data => alert(data))
  .catch(err => alert('Error al guardar: ' + err));
}