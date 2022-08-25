const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  console.log(e);
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();
  //getBoundingClientRect=>>>method returns a DOMRect object providing information about the size of an element and its position relative to the viewport. //getBoundingClientRect=>>>method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
  console.log("DOMRect de Ball:", limitsBall);
  console.log("DOMRect de Stage:", limitsStage);

  //e.preventDefault lo vamos a hacer solo en el caso que toquemos ,as teclas indicadas porque sino estaremos previniendo cualquier comportamiento por defecto de las teclas.lo pongo dentro del if para que solo valide dentro de stage, una vez que salgo el scroll vertical se habilita
  switch (e.keyCode) {
    case 37:
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault(); //esto es para cancelar el scroll vertical
        x--;
      } else {
        x = 0;
      }
      break;

    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      } else {
        y = 0;
      }
      break;

    case 39:
      if (limitsBall.right < limitsStage.right) {
        x++;
        e.preventDefault();
      } else {
        x = 0;
      }
      break;

    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      } else {
        y = 0;
      }
      break;
    default:
      break;
  }
  // $ball.style.setProperty("transform", `translate(${x * 10}px,${y * 10}px)`);
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
//MINUTO 31:06

export function shortcuts(e) {
  // console.log(e);
  // console.log(e.type);
  // console.log("tecla presionada:", e.key);
  // console.log("ctrl: ", e.ctrlKey);
  // console.log("alt: ", e.altKey);
  // console.log("shift: ", e.shiftKey);

  // console.log(e.keyCode);

  if (e.key === "a" && e.ctrlKey) {
    console.log("Tecla Ctrl + a");
    alert("Haz lanzado un alerta");
  }
  if (e.key === "c" && e.ctrlKey) {
    console.log("Tecla Ctrl + c");
    confirm("Haz lanzado una confirmacion");
  }
  if (e.key === "p" && e.ctrlKey) {
    console.log("Tecla Ctrl + p");
    prompt("Haz lanzado un aviso");
  }
}
