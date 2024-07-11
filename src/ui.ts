// ui.ts
import { DameCarta, sumaPuntos, terminarJuego, reiniciarJuego } from './motor';
import { getJuegoTerminado, imagenes } from './model';

export const obtenerCarta = () => {
  if (getJuegoTerminado()) {
    console.log("El juego ha terminado, no puedes pedir más cartas.");
    return;
  }

  const carta = DameCarta();
  console.log("Tu carta es: " + carta);
  sumaPuntos(carta);

  const contenedorImagenes = document.getElementById("imagenes") as HTMLDivElement;

  if (contenedorImagenes && carta <= imagenes.length) {
    const imagen = document.createElement("img");
    imagen.src = imagenes[carta - 1];
    imagen.classList.add("imagen");
    contenedorImagenes.appendChild(imagen);
  }
};

export const plantarse = () => {
  terminarJuego();
};

export const reiniciar = () => {
  reiniciarJuego();
};



