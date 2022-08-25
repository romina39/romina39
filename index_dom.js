/* **********     Curso JavaScript: 80. DOM: Ejercicios Prácticos | Presentación - #jonmircha     ********** */

import { countDown } from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { reloj, alarma } from "./dom/reloj.js";
import { scrollFlecha } from "./dom/boton_scroll.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu");
  reloj("#reloj", "#iniciarR", "#detenerR");
  alarma("assets/alarma.mp3", "#iniciarA", "#detenerA");
  countDown(".countdown", "2022-08-23T09:43:00", "Feliz Cumpleaños 🥳 🎂!!!");
  scrollFlecha(".scroll-top-btn");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
