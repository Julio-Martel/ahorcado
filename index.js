const contenedorPrincipal = document.querySelector('.main-content');
const botonStart = document.getElementById('main-button');
const botonInstrucciones = document.getElementById('button-instrucciones');
const ventanaModalInstrucciones = document.querySelector('.ventana-modal');
const contenedorModal = document.querySelector('.contenido-modal');
const botonCerrarModal = document.getElementById('boton-cerrar-modal');
const gameOver = new Audio('audios/dead.mp3');
const botonTecla = new Audio('audios/button2.mp3');
const botonStartSound = new Audio('audios/buttonPlay.mp3');
const evilGameOverSound = new Audio('audios/evilGameOver.mp3');
const ambienteSound = new Audio('audios/ambient.mp3');
const windSound = new Audio('audios/youWin.mp3');

const cambiarAlMenu = () => {
	contenedorPrincipal.innerHTML = `
		<div class="contenedor-imagen-botones">
			<div class="content" id="main-image">
				<img src="images/imageStart/start-game.jpg" class="start-game-image">
			</div>	
			<div class="content" id="texto-boton">
				<button class="button" id="main-button">
					start!
				</button>
				<button class="button" id="button-instrucciones">
					instrucciones
				</button>
			</div>			
		</div>		
		<div class="ventana-modal">
			<div class="contenido-modal">
			 	<div class="lista-instrucciones">
			 		<h2>Como jugar</h2>
					<ol>
						<li>1 - El juego mostrará una palabra oculta con guiones 	bajos (_) representando cada letra.</li>
						<li>2 - El jugador debe ingresar una letra en cada turno.</li>
						<li>3 - Si la letra está en la palabra, se revelará en su posición correspondiente.</li>
						<li>4 - Si la letra no está en la palabra, el jugador perderá un intento y se dibujará una parte del ahorcado.</li>
						<li>
							<li>5 - El juego continúa hasta que:</li>
								<ul>
									<li> * El jugador adivine toda la palabra (¡gana! 🎉).</li>
									<li> * Se complete el dibujo del ahorcado sin adivinar la palabra (pierde 💀).</li>
								</ul>
						</li>
					</ol>
					<button class="button" id="boton-cerrar-modal">
						cerrar
					</button>
				</div>
			</div>
		</div>
	`;

	const botonStart = document.getElementById('main-button');
	const botonInstrucciones = document.getElementById('button-instrucciones');
	const ventanaModalInstrucciones = document.querySelector('.ventana-modal');
	const contenedorModal = document.querySelector('.contenido-modal');
	const botonCerrarModal = document.getElementById('boton-cerrar-modal');


	botonStart.addEventListener('click', cambiarAContenidoJugable);

	botonInstrucciones.addEventListener('click', () => ventanaModalInstrucciones.style.display = "flex" );

	ventanaModalInstrucciones.addEventListener('click', () => {
		ventanaModalInstrucciones.style.display = "none";
		botonStartSound.play();
	});

	contenedorModal.addEventListener('click',() => event.stopPropagation());

	botonCerrarModal.addEventListener('click', () => ventanaModalInstrucciones.style.display = "none");}

async function cambiarAContenidoJugable() {
	ambienteSound.play();
	ambienteSound.loop = true;	
	botonStartSound.play();
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
		
		<div class = "ventana-modal" id="modal-1">
			<div class="contenido-modal-partida" id="partida-ganada">
				<div class="puntaje-botones">
					<div class="display-puntaje-obtenido">
						<label for="puntaje" name="puntaje" class="puntaje">Your score: </label>
						<input type="number" value="0" class="mostrar-score" readonly>		
					</div>
					<div class="seccion-botones">
						<button class="boton-modal" id="boton-reiniciar">Restart Game</button>
						<button class="boton-modal" id="boton-menu">Main Menu</button>
					</div>		
				</div>
			</div>
		</div>	

		<div class = "ventana-modal" id="modal-2">
			<div class="contenido-modal-partida" id="partida-perdida">
				<div class="puntaje-botones">
					<div class="mostrar-palabra">
					 	<h3>La palabra correcta era:</h3>
					</div>
					<div class="display-puntaje-obtenido">
						<label for="puntaje" name="puntaje" class="puntaje">Your score: </label>
						<input type="number" value="0" class="mostrar-score" readonly>		
					</div>
					<div class="seccion-botones">
						<button class="boton-modal" id="boton-reiniciar-1">Restart Game</button>
						<button class="boton-modal" id="boton-menu-1">Main Menu</button>
					</div>		
				</div>
			</div>
		</div>			
	`;

	const palabras = [
	  "hechizo", "dragon", "pocion", "espada", "misterio", "castillo", "aventura", "mago", "encantamiento", "sombrero",
	  "luz", "sombra", "piedra", "llama", "secreto", "puerta", "rio", "sabiduria", "tesoro", "noche",
	  "bruja", "elfo", "orco", "caballero", "reino", "principe", "princesa", "corona", "espejo", "bosque",
	  "caverna", "cueva", "hadas", "fantasma", "duende", "varita", "maleficio", "conjuro", "espiritu", "maldicion",
	  "espectro", "poder", "trampa", "reliquia", "viento", "agua", "fuego", "tierra", "nube", "relampago",
	  "trueno", "estrella", "universo", "galaxia", "dimensional", "porton", "llave", "enigma", "pergamino", "sigilo",
	  "guardian", "templo", "sacrificio", "energia", "runas", "cetro", "invocacion", "ritual", "leyenda", "sabio",
	  "tormenta", "claro", "escondite", "oculto", "sombra", "luz", "brillo", "espiral", "oscuro", "relato",
	  "profeta", "vision", "destino", "camino", "viaje", "ciclo", "infierno", "paraiso", "demonio", "angel",
	  "despertar", "alquimia", "fuerza", "resplandor", "bruma", "gargola", "trono", "portal", "cristal", "sello",
	  "eterno", "eternidad", "inmortal", "ascension", "descenso", "sabiduria", "secreto", "leyenda", "perdido", "oculto",
	  "verdugo", "desafiante", "daga", "lobo", "espiritu", "serpiente", "resplandor", "oscuro", "arma", "combate",
	  "rayo", "tornado", "fuerza", "encantado", "vinculo", "brillo", "camuflaje", "corazon", "destello", "batalla",
	  "caballo", "guerrero", "intriga", "sigilo", "llave", "puerta", "templo", "altar", "poderoso", "fuerza",
	  "noche", "dia", "aurora", "cielo", "inframundo", "revelacion", "eco", "sangre", "cruzada", "sombra",
	  "tragedia", "llama", "sabio", "ciencia", "experimento", "ceniza", "fragancia", "nectar", "poeta", "artesano",
	  "herrero", "arquero", "gladiador", "monje", "piedra", "vinculo", "deseo", "juramento", "realidad", "ilusion",
	  "sombrio", "encantador", "sigilo", "oscuro", "armadura", "escudo", "flama", "maestro", "servidor", "liberacion",
	  "prision", "sacrificio", "memoria", "pasado", "futuro", "presente", "ritmo", "sinfonia", "melodia", "ecos",
	  "sello", "muro", "desierto", "laguna", "cumbre", "valle", "faro", "estanque", "perla", "diamante",
	  "esmeralda", "rubio", "zafiro", "jade", "pergamino", "cristal", "oculto", "arca", "tesoro", "bendicion",
	  "plegaria", "pacto", "alianza", "traicion", "sombra", "luz", "estrella", "cenizas", "luna", "sol",
	  "cicatriz", "invisible", "fantasmal", "lamento", "maldicion", "torre", "reino", "dictador", "sabiduria", "tragedia",
	  "rebelion", "escape", "encierro", "desafio", "sangre", "coraje", "guerra", "paz", "profecia", "guardian",
	  "serpiente", "dragones", "vampiro", "esqueleto", "almas", "pacto", "condena", "nexo", "purgatorio", "travesia",
	  "deseo", "pocima", "herida", "peligro", "enemigo", "amistad", "hermandad", "soledad", "venganza", "justicia",
	  "confianza", "desconocido", "brujula", "serpiente", "fuego", "cielo", "tierra", "oceano", "barrera", "prueba",
	  "instinto", "encierro", "verdugo", "vidente", "reencarnacion", "susurro", "silencio", "compas", "travesia", "eterno",
	  "fundacion", "poder", "ascenso", "leyenda", "eterna", "honor", "fragancia", "silencio", "vestigios", "eco",
	  "acero", "cenizas", "recompensa", "noche", "acantilado", "deseo", "brillante", "estrella", "luz", "tormenta",
	  "cautiverio", "inocencia", "sabiduria", "destino", "enigmatico", "revelacion", "candado", "llave", "puerta", "sombra",
	  "desafiante", "portador", "compromiso", "disciplina", "conjuro", "talisman", "gargantilla", "destreza", "obstaculo", "decadencia",
	  "esperanza", "prueba", "piedra", "vinculo", "sendero", "intriga", "bruma", "cautela", "guardian", "pilar",
	  "vestigio", "lamento", "alquimia", "prohibido", "oculto", "adivinanza", "sabiduria", "brillante", "tormento", "inocente",
	  "perdido", "origen", "cautela", "prediccion", "misterioso", "secreto", "realidad", "sueño", "obsesion", "prohibido"];

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

	for (let i = 
		0; i < longitudPalabra; i++) {
	    const casillaLetra = document.createElement('div');
	    casillaLetra.classList.add('cuadrado-casilla');
	    casillaLetra.setAttribute("data-value", i);
	    casillaLetra.setAttribute("id", i);
	    contenedorPalabra.appendChild(casillaLetra);
	}
	
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
			botonTecla.play();
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
						tecla.style.background = "green";
						tecla.style.color = "white";
						valorDisplayScore = valorDisplayScore + 1000;
						contadorScore.value = valorDisplayScore;
						letraEncontradaAcum++;
					} 
				}
				
				if (letraEncontradaAcum === palabraSeleccionada.length) {	

					const letras = document.querySelectorAll('.tecla-letra');
					
					letras.forEach(letra => {
						letra.style.pointerEvents = "none";
						letra.disabled = true;
					});

					await delay(2000);

					const ventanaModalPartidaGanada = document.getElementById('modal-1');
					const contenidoModalPartidaGanada = document.getElementById('partida-ganada');
					const displayScorePartidaGanada = document.querySelector('.mostrar-score');
					const tituloPartidaGanada = document.createElement('h1');
					const reiniciarJuego = document.getElementById('boton-reiniciar');
					const salirAlMenu = document.getElementById('boton-menu');

					windSound.play();
					ventanaModalPartidaGanada.style.display = "flex";
					ventanaModalPartidaGanada.style.cursor = "auto";
					tituloPartidaGanada.textContent = "Partida ganada!"
					contenidoModalPartidaGanada.appendChild(tituloPartidaGanada);
					displayScorePartidaGanada.value = valorDisplayScore;

					reiniciarJuego.addEventListener('click', cambiarAContenidoJugable);
					salirAlMenu.addEventListener('click', cambiarAlMenu);
				}

			} catch(error) {
				
				tecla.style.background = "darkred";
				tecla.style.color = "white";

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
				
				if (contadorErrores === 6) {
					
					gameOver.volume = 0.5;
					gameOver.play();

					const letras = document.querySelectorAll('.tecla-letra');
					
					letras.forEach(letra => {
						letra.style.pointerEvents = "none";
						letra.disabled = true;
					});
					
					await delay(2000);


					const ventanaModalPartidaPerdida = document.getElementById('modal-2');
					const contenidoModalPartidaPerdida = document.getElementById('partida-perdida');
					const displayScorePartidaPerdida = document.querySelector('.mostrar-score');
					const tituloPartidaPerdida = document.createElement('h1');
					const reiniciarJuego = document.getElementById('boton-reiniciar-1');
					const salirAlMenu = document.getElementById('boton-menu-1');
					const mostrarPalabra = document.querySelector('.mostrar-palabra');
					const palabraCorrecta = document.createElement('h2');

					evilGameOverSound.play();
					palabraCorrecta.textContent = palabraSeleccionada;
					mostrarPalabra.appendChild(palabraCorrecta);
					ventanaModalPartidaPerdida.style.display = "flex";
					ventanaModalPartidaPerdida.style.cursor = "auto";
					tituloPartidaPerdida.textContent = "Partida perdida!"
					contenidoModalPartidaPerdida.appendChild(tituloPartidaPerdida);
					displayScorePartidaPerdida.value = valorDisplayScore;

					reiniciarJuego.addEventListener('click', cambiarAContenidoJugable);
					salirAlMenu.addEventListener('click', cambiarAlMenu);					
				}
			}

		});
	}
} // aca termina la funcion principal cambiarAContenidoJugable

botonStart.addEventListener('click', cambiarAContenidoJugable);

botonInstrucciones.addEventListener('click', () => {
	ventanaModalInstrucciones.style.display = "flex";
	botonStartSound.play();
} );

ventanaModalInstrucciones.addEventListener('click', () => ventanaModalInstrucciones.style.display = "none");

contenedorModal.addEventListener('click',() => event.stopPropagation());

botonCerrarModal.addEventListener('click', () => ventanaModalInstrucciones.style.display = "none");