/* **********     Curso JavaScript: 86. DOM: Ejercicios Prácticos | Cuenta Regresiva(countdown) - #jonmircha     ********** */

const d = document;
// let interval;
export function countDown(countDown, dateNew, mensaje) {
  const $cuentah2 = d.querySelector(".countdown-h2"),
    $cuenta = d.querySelector(countDown);
  $cuentah2.addEventListener("click", (e) => {
    let interval = setInterval(() => {
      let fechaNew = new Date(dateNew).getTime(),
        fechaOld = new Date().getTime(),
        limit = fechaNew - fechaOld,
        //este rtdo esta en ms
        factor = 1000 * 60 * 60 * 24,
        days = Math.floor(limit / factor), //rstdo en dias, y solo entero
        //el slice + el "0" es para que aparezca comoun reloj dgital 01
        //Cuando introduzco el  "0" estoy convirtiendo ese dato en una cadena de texto
        hours = ("0" + Math.floor((limit / factor - days) * 24)).slice(-2),
        minutes = Math.floor(((limit / factor - days) * 24 - hours) * 60),
        seconds = Math.floor(
          (((limit / factor - days) * 24 - hours) * 60 - minutes) * 60
        );

      console.log(limit / factor);
      console.log(days);
      console.log(hours);
      console.log(minutes);
      console.log(seconds);

      $cuenta.innerHTML = `<h3>Faltan: ${days} días, ${hours} hs, ${minutes} min, ${seconds} seg.</h3>`;
      if (limit < 0) {
        $cuenta.innerHTML = `<h3>${mensaje}</h3>`;
        clearInterval(interval);
      }
    }, 1000);
  });
}
