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
				<div class="contenido-estadistico" id="display-score">
					<label for="intentos" name="intentos" class="intentos">Score:</label>
					<input type="number" value ="0" name="score" class="score-number" readonly>
				</div>
			</div>
			<div class="display-muñeco">
				<div class="contenedor-muñeco">
					<div class ="seccion" id="seccion-1">
						<img src="images/partesMuñeco/cabeza.png" class = "cabeza" id = "cabeza-muñeco">
					</div>
					<div class="seccion" id="seccion-2">
						<img src="images/partesMuñeco/brazoIzquierdo.png" class="brazo" id="brazo-izquierdo">
						<img src="images/partesMuñeco/torso.png" class="brazo" id="torso">
						<img src="images/partesMuñeco/brazoDerecho.png" class="brazo" id="brazo-derecho">
					</div>
					<div class="seccion" id="seccion-3">
						<img src = "images/partesMuñeco/piernaIzquierda.png" class="pierna" id="pierna-izquierda">
						<img src = "images/partesMuñeco/piernaDerecha.png" class="pierna" id="pierna-derecha">
					</div>
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
		<div class = ventana-modal>
			<div class ="contenedor-modal">
				<h2>Game Over</h2>
				<h3>La palabra era:</h3>
				<input type="number" name="muestra-score" class="mostrar-score" readonly>
			</div>
		</div>
	`;

	const palabras = [
	  "hechizo", "dragon", "pocion", "espada", "misterio", 
	  "castillo", "aventura", "mago", "encantamiento", "sombrero", 
	  "luz", "sombra", "piedra", "llama", "secreto", 
	  "puerta", "río", "sabiduría", "tesoro", "noche"];

	const obtenerValorAleatorio = (arr) => {
   	 	return new Promise(resolve => {
   	 		resolve(arr[Math.floor(Math.random() * arr.length)]);
   	 	});
	}
	
	const palabraSeleccionada = await obtenerValorAleatorio(palabras);
	const longitudPalabra = palabraSeleccionada.length;
	const contenedorPalabra = document.querySelector('.contenedor-palabra');
	const teclas = document.querySelectorAll('.tecla-letra');
	const contenedorDeVidas = document.querySelector('.intentos-img');
	const contadorScore = document.querySelector('.score-number');
	let valorDisplayScore = parseInt(contadorScore.value);
	let contadorErrores = 0; // si esto llega a 6, deberia acabarse el juego
	let letraEncontradaAcum = 0; // si esto llega a la misma longitud de la palabra deberia salir una ventana modal con exito!

	for (let i = 0; i < longitudPalabra; i++) {
	    const casillaLetra = document.createElement('div');
	    casillaLetra.classList.add('cuadrado-casilla');
	    casillaLetra.setAttribute("data-value", i);
	    casillaLetra.setAttribute("id", i);
	    contenedorPalabra.appendChild(casillaLetra);
	}

	console.log(palabraSeleccionada); //test

	const buscarLetra = (letra) => {
		return new Promise((resolve,reject) => {
			const letraEncontrada = palabraSeleccionada.includes(letra);
			if (letraEncontrada) {resolve(true);} else {reject(false);}
		});
	}

	const delay = (ms) => {
		return new Promise(resolve => setTimeout(resolve,ms));
	}

	for(let tecla of teclas) {
		tecla.addEventListener('click', async () => {
			const teclaValue = tecla.value;
			try {
				const letraEncontrada = await buscarLetra(teclaValue);

				for(let i = 0; i < palabraSeleccionada.length; i++) {
					let indiceALetra = i.toString();
					const idCasillaVacia = document.getElementById(indiceALetra);

					if (teclaValue === palabraSeleccionada[i]) {
						idCasillaVacia.textContent = teclaValue;
						tecla.style.opacity = "0.5";
						tecla.style.pointerEvents = "none";
					}
				}

				valorDisplayScore = valorDisplayScore + 1000;
				contadorScore.value = valorDisplayScore;

				letraEncontradaAcum++;

				if (letraEncontradaAcum === palabraSeleccionada.length) {
					await delay(2000);
					// aqui colocar modal!
				}

			} catch(error) {
				
				contadorErrores++;
				
				switch(contadorErrores) {
					case 1:
						const seccion1 = document.getElementById('seccion-1');
						const cabezaMuñeco = document.getElementById('cabeza-muñeco');
						cabezaMuñeco.classList.add('mostrar');
						tecla.style.opacity = "0.5";
						tecla.style.pointerEvents = "none";
					break;
						
					case 2:
						const seccion2a = document.getElementById('seccion-2');
						const brazoIzquierdo = document.getElementById('brazo-izquierdo');
						brazoIzquierdo.classList.add('mostrar');
						tecla.style.opacity = "0.5";
						tecla.style.pointerEvents = "none";
					break;

					case 3:
						const seccion2b = document.getElementById('seccion-2');
						const torso = document.getElementById('torso');
						torso.classList.add('mostrar');
						tecla.style.opacity = "0.5";
						tecla.style.pointerEvents = "none";
					break;	

					case 4:
						const seccion2c = document.getElementById('seccion-2');
						const brazoDerecho = document.getElementById('brazo-derecho');
						brazoDerecho.classList.add('mostrar');
						tecla.style.opacity = "0.5";
						tecla.style.pointerEvents = "none";
					break;

					case 5:
						const seccion3a = document.getElementById('seccion-3');
						const piernaIzquierda = document.getElementById('pierna-izquierda');
						piernaIzquierda.classList.add('mostrar');
						tecla.style.opacity = "0.5";
						tecla.style.pointerEvents = "none";
					break;	

					case 6:
						const seccion3b = document.getElementById('seccion-3');
						const piernaDerecha = document.getElementById('pierna-derecha');
						piernaDerecha.classList.add('mostrar');
						tecla.style.opacity = "0.5";
						tecla.style.pointerEvents = "none";						
					break;}
					
				console.log(contadorErrores);

				if (contadorErrores === 6) {
					console.log('HAS PERDIDO!!!');
					// aqui colocar modal!!
				}

			}

		});}

	

} // aca termina la funcion principal cambiarAContenidoJugable

botonStart.addEventListener('click', cambiarAContenidoJugable);

botonInstrucciones.addEventListener('click', () => ventanaModalInstrucciones.style.display = "flex" );

ventanaModalInstrucciones.addEventListener('click', () => ventanaModalInstrucciones.style.display = "none");

contenedorModal.addEventListener('click',() => event.stopPropagation());

botonCerrarModal.addEventListener('click', () => ventanaModalInstrucciones.style.display = "none");