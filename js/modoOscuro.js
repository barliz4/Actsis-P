// Obtiene el botón que activará el modo oscuro (por su id "modo-btn")
const btnModo = document.getElementById('modo-btn');

// Obtiene la imagen del ícono (sol o luna) dentro del botón
const icono = document.getElementById('icono-modo');


// Evento: cuando el usuario hace clic en el botón
btnModo.addEventListener('click', () => {

  // Alterna (agrega o quita) la clase "modo-oscuro" al body
  // Si la clase existe, se quita; si no, se agrega
  document.body.classList.toggle('modo-oscuro');

  // Verifica si actualmente el modo oscuro está activado
  const modoOscuro = document.body.classList.contains('modo-oscuro');
  
  // Cambia el ícono según el modo activo:
  // Si está en modo oscuro → muestra el sol (para indicar que puede volver al claro)
  // Si no → muestra la luna
  icono.src = modoOscuro ? 'imagenes/sol-removebg-preview.png' : 'imagenes/moon2-removebg-preview.png';
  
  // Guarda la preferencia del usuario (true/false) en el almacenamiento local del navegador
  localStorage.setItem('modoOscuro', modoOscuro);
});


//Al cargar la página, verifica si el usuario dejó el modo oscuro activado
if (localStorage.getItem('modoOscuro') === 'true') {

  // Si sí, agrega la clase "modo-oscuro" al body
  document.body.classList.add('modo-oscuro');

  // Y muestra el ícono del sol (ya que está en modo oscuro)
  icono.src = 'imagenes/sol-removebg-preview.png';
}


