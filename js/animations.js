const slidesContainer = document.querySelector(".slides_container");
const btnLeft = document.querySelector(".btn-carrusel.left");
const btnRight = document.querySelector(".btn-carrusel.right");

btnRight.addEventListener("click", () => {
  slidesContainer.scrollBy({ left: 300, behavior: "smooth" });
});

btnLeft.addEventListener("click", () => {
  slidesContainer.scrollBy({ left: -300, behavior: "smooth" });
});

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


