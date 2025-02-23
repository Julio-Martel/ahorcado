const contenedorPrincipal = document.querySelector('.main-content');
const botonStart = document.getElementById('main-button');
const botonInstrucciones = document.getElementById('button-instrucciones');
const ventanaModalInstrucciones = document.querySelector('.ventana-modal');
const contenedorModal = document.querySelector('.contenido-modal');
const botonCerrarModal = document.getElementById('boton-cerrar-modal');

async function cambiarAContenidoJugable() {}

botonStart.addEventListener('click', cambiarAContenidoJugable);

botonInstrucciones.addEventListener('click', () => ventanaModalInstrucciones.style.display = "flex" );

ventanaModalInstrucciones.addEventListener('click', () => ventanaModalInstrucciones.style.display = "none");

contenedorModal.addEventListener('click',() => event.stopPropagation());

botonCerrarModal.addEventListener('click', () => ventanaModalInstrucciones.style.display = "none");