
const d = document;
export function reloj(reloj, iniciarR, detenerR) {
  let intervaloReloj;
  d.addEventListener("click", (e) => {
    if (e.target.matches(iniciarR)) {
      intervaloReloj = setInterval(() => {
        let tiempo = new Date().toLocaleTimeString();
        d.querySelector(reloj).innerHTML = `
          <h3>${tiempo}</h3>
        `;
        // d.querySelector(iniciarR).disabled = true;
        e.target.disabled = true;
      }, 1000);
    }
    if (e.target.matches(detenerR)) {
      clearInterval(intervaloReloj);
      d.querySelector(reloj).innerHTML = null;
      d.querySelector(iniciarR).disabled = false;
    }
  });
}

export function alarma(sound, iniciarA, detenerA) {
  //aca no queremos crear una etiqueta para que la podamos ver en pantalla, solo la creamos para guardar el audio
  const $alarm = d.createElement("audio"); //aca creamos la variable que almacena la etiqueta audio
  $alarm.setAttribute("src", sound);
  let intervaloAlarma;
  d.addEventListener("click", (e) => {
    if (e.target.matches(iniciarA)) {
      intervaloAlarma = setTimeout(() => {
        $alarm.play();
      }, 2000);
      e.target.disabled = true;
    }
    if (e.target.matches(detenerA)) {
      clearTimeout(intervaloAlarma);
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(iniciarA).disabled = false;
    }
  });
}
