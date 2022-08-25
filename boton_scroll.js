/* **********     Curso JavaScript: 87. DOM: Ejercicios Prácticos | Botón de Scroll - #jonmircha     ********** */
const d = document;
const w = window;

export function scrollFlecha(btn) {
  const $flecha = d.querySelector(btn);
  w.addEventListener("scroll", (e) => {
    let scrollTop = w.scrollY || d.documentElement.scrollTop; //sino soporta scrollY que use scrollTop
    if (scrollTop > 600) {
      console.log(w.scrollY, d.documentElement.scrollTop);
      $flecha.style.setProperty("visibility", "visible");
      $flecha.classList.add("is-active");
    } else {
      $flecha.style.setProperty("visibility", "hidden");
    }
    $flecha.addEventListener("click", (e) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}
