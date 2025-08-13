const slidesContainer = document.querySelector(".slides_container");
const btnLeft = document.querySelector(".btn-carrusel.left");
const btnRight = document.querySelector(".btn-carrusel.right");

btnRight.addEventListener("click", () => {
  slidesContainer.scrollBy({ left: 300, behavior: "smooth" });
});

btnLeft.addEventListener("click", () => {
  slidesContainer.scrollBy({ left: -300, behavior: "smooth" });
});
