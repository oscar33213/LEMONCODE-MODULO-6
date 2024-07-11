// motor.ts
import { getMostrarPuntuacion, setMostrarPuntuacion, setJuegoTerminado, resetState } from './model';

export const sumaPuntos = (puntos: number) => {
  if (isNaN(puntos)) {
    console.error("Error: puntos no es un número");
    return;
  }
  let mostrarPuntuacion = getMostrarPuntuacion();
  mostrarPuntuacion += puntos;
  setMostrarPuntuacion(mostrarPuntuacion);
  if (mostrarPuntuacion > 7.5) {
    terminarJuego();
  }
};

export const DameCarta = (): number => {
  const carta = Math.floor(Math.random() * 10) + 1;
  if (carta === 9 || carta === 10) {
    return carta + 1;
  }
  return carta;
};

export const terminarJuego = () => {
  setJuegoTerminado(true);
  const mostrarPuntuacion = getMostrarPuntuacion();
  const divPuntuacion = document.getElementById("puntuacion");
  if (divPuntuacion) {
    divPuntuacion.innerHTML = "Puntuación final: " + mostrarPuntuacion;
  }
  if (mostrarPuntuacion < 4) {
    console.log("Has sido muy conservador.");
  } else if (mostrarPuntuacion === 5) {
    console.log("Te ha entrado el canguelo eh?");
  } else if (mostrarPuntuacion === 6 || mostrarPuntuacion === 7) {
    console.log("Casi casi...");
  } else if (mostrarPuntuacion === 7.5) {
    console.log("¡Lo has clavado! ¡Enhorabuena!");
  }
};

export const reiniciarJuego = () => {
  resetState();
  location.reload();
};




