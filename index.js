const contenedorPrincipal = document.querySelector('.main-content');
const botonStart = document.getElementById('main-button');
const botonInstrucciones = document.getElementById('button-instrucciones');
const ventanaModalInstrucciones = document.querySelector('.ventana-modal');
const contenedorModal = document.querySelector('.contenido-modal');
const botonCerrarModal = document.getElementById('boton-cerrar-modal');

async function cambiarAContenidoJugable() {
	contenedorPrincipal.innerHTML = `
		<div class="seccion-juego">
			<div class="score-vidas">
				<div class="contenido-estadistico" id="display-vidas">
					<label for="intentos" name="intentos" class="intentos">Intentos:</label>
					<div class="intentos-img">
						<img src="images/imagesGame/icon-vida.png" class="icon-vida">
						<img src="images/imagesGame/icon-vida.png" class="icon-vida">
						<img src="images/imagesGame/icon-vida.png" class="icon-vida">
						<img src="images/imagesGame/icon-vida.png" class="icon-vida">
						<img src="images/imagesGame/icon-vida.png" class="icon-vida">
					</div>
				</div>
				<div class="contenido-estadistico" id="display-score">
					<label for="intentos" name="intentos" class="intentos">Score:</label>
					<input type="number" value ="0" name="score" class="score-number" readonly>
				</div>
			</div>
			<div class="display-muñeco">
				<div class="contenedor-muñeco">
				</div>
			</div>

			<div class="contenedor-palabra">
			</div>

			<div class="teclado-letras">
				<div class="seccion-teclas">
					<input type="button" value="a" name="letra" class="tecla-letra" readonly>
					<input type="button" value="b" name="letra" class="tecla-letra" readonly>
					<input type="button" value="c" name="letra" class="tecla-letra" readonly>
					<input type="button" value="d" name="letra" class="tecla-letra" readonly>
					<input type="button" value="e" name="letra" class="tecla-letra" readonly>
					<input type="button" value="f" name="letra" class="tecla-letra" readonly>
					<input type="button" value="g" name="letra" class="tecla-letra" readonly>
					<input type="button" value="h" name="letra" class="tecla-letra" readonly>
					<input type="button" value="i" name="letra" class="tecla-letra" readonly>
					<input type="button" value="j" name="letra" class="tecla-letra" readonly>				
					<input type="button" value="k" name="letra" class="tecla-letra" readonly>
					<input type="button" value="m" name="letra" class="tecla-letra" readonly>
					<input type="button" value="n" name="letra" class="tecla-letra" readonly>
					<input type="button" value="ñ" name="letra" class="tecla-letra" readonly>
					<input type="button" value="l" name="letra" class="tecla-letra" readonly>
				</div>

				<div class="seccion-teclas">
					<input type="button" value="o" name="letra" class="tecla-letra" readonly>
					<input type="button" value="p" name="letra" class="tecla-letra" readonly>
					<input type="button" value="q" name="letra" class="tecla-letra" readonly>
					<input type="button" value="r" name="letra" class="tecla-letra" readonly>
					<input type="button" value="s" name="letra" class="tecla-letra" readonly>
					<input type="button" value="t" name="letra" class="tecla-letra" readonly>
					<input type="button" value="u" name="letra" class="tecla-letra" readonly>
					<input type="button" value="v" name="letra" class="tecla-letra" readonly>
					<input type="button" value="w" name="letra" class="tecla-letra" readonly>
					<input type="button" value="x" name="letra" class="tecla-letra" readonly>
					<input type="button" value="y" name="letra" class="tecla-letra" readonly>
					<input type="button" value="z" name="letra" class="tecla-letra" readonly>					
				</div>							
			</div>
		</div>
	`;

	const palabras = [
	  "hechizo", "dragón", "poción", "espada", "misterio", 
	  "castillo", "aventura", "mago", "encantamiento", "sombrero", 
	  "luz", "sombra", "piedra", "llama", "secreto", 
	  "puerta", "río", "sabiduría", "tesoro", "noche"
	];

	const obtenerValorAleatorio = (arr) => {
   	 	return new Promise(resolve => {
   	 		resolve(arr[Math.floor(Math.random() * arr.length)]);
   	 	});
	}
	
	const palabraSeleccionada = await obtenerValorAleatorio(palabras);

	console.log(palabraSeleccionada);


}

botonStart.addEventListener('click', cambiarAContenidoJugable);

botonInstrucciones.addEventListener('click', () => ventanaModalInstrucciones.style.display = "flex" );

ventanaModalInstrucciones.addEventListener('click', () => ventanaModalInstrucciones.style.display = "none");

contenedorModal.addEventListener('click',() => event.stopPropagation());

botonCerrarModal.addEventListener('click', () => ventanaModalInstrucciones.style.display = "none");