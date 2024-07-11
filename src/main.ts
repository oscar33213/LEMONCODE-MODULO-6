// main.ts
import { partida } from './partida';

const botonCarta = document.getElementById("pedirCarta");

if (botonCarta) {
  botonCarta.addEventListener("click", () => partida.obtenerCarta());
}

const botonPlantarse = document.getElementById("plantarse");

if (botonPlantarse) {
  botonPlantarse.addEventListener("click", () => partida.plantarse());
}

const botonReiniciar = document.getElementById("restart");

if (botonReiniciar) {
  botonReiniciar.addEventListener("click", () => partida.reiniciar());
}


