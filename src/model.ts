// model.ts

let _mostrarPuntuacion: number = 0;
let _juegoTerminado: boolean = false;

export const getMostrarPuntuacion = () => _mostrarPuntuacion;
export const setMostrarPuntuacion = (puntuacion: number) => {
  _mostrarPuntuacion = puntuacion;
};

export const getJuegoTerminado = () => _juegoTerminado;
export const setJuegoTerminado = (terminado: boolean) => {
  _juegoTerminado = terminado;
};
// @ts-ignore
export const imagenes: string[] = [
  "/sources/1_as-copas.jpg",
  "/sources/2_dos-copas.jpg",
  "/sources/3_tres-copas.jpg",
  "/sources/4_cuatro-copas.jpg",
  "/sources/5_cinco-copas.jpg",
  "/sources/6_seis-copas.jpg",
  "/sources/7_siete-copas.jpg",
  "/sources/10_sota-copas.jpg",
  "/sources/11_caballo-copas.jpg",
  "/sources/12_rey-copas.jpg",
];

export const resetState = () => {
  _mostrarPuntuacion = 0;
  _juegoTerminado = false;
};


