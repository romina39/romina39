export default function hamburgerMenu(panelBtn, panel, menu) {
  //delegacion de eventos
  const d = document;

  // console.log(panelBtn.valueOf());
  // console.log(typeof panelBtn.valueOf());
  // console.log(isNaN(panelBtn));
  // console.log(typeof isNaN(panelBtn));

  // VALIDACION DE SELECTORES
  //valida que no ingrese solo numeros
  if (
    isNaN(panelBtn) === false ||
    isNaN(panel) === false ||
    isNaN(menu) === false
  )
    return console.error(
      `El valor ingresado en
      panelBtn:${panelBtn} o
      panel:${panel} o
      menu:${menu};
      es un numero, por favor ingresa un selector valido de CSS.`
    );

  //valida que no ingrese vacio
  if (panelBtn === "" || panel === "" || menu === "")
    return console.warn(
      `Ninguna de las variables:
      panelBtn:${panelBtn},
      panel:${panel},
      menu:${menu};
      puede ir vacia, por favor ingresa un selector valido de CSS`
    );
  //Aca me esta diciendo que el elemento no esta en el documento.
  if (
    d.querySelector(panelBtn) === null ||
    d.querySelector(panelBtn) === undefined ||
    d.querySelector(panel) === null ||
    d.querySelector(panel) === undefined ||
    d.querySelector(menu) === null ||
    d.querySelector(menu) === undefined
  )
    return console.error(
      `Algunos de los selectores ingresados NO es un selector valido de CSS, o no existe el elemento en el documento`
    );
  //Valida que efectivamente el elemento esta en el documento.
  if (
    d.querySelector(panelBtn).matches("*") &&
    d.querySelector(panel).matches("*") &&
    d.querySelector(menu).matches("*")
  ) {
    console.log(
      panelBtn + " es un selector valido: ",
      d.querySelector(panelBtn)
    );
    console.log(panel + " es un selector valido: ", d.querySelector(panel));
    console.log(menu + " es un selector valido: ", d.querySelector(menu));
  }

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      /*if (e.target.matches(panelBtn)) esto por si solo no lo puedo usar porque solo me funnciona para los bordes del boton, si presiono sobre las lineas(determinadas por la etiqueta <span>) no funciona. Por eso agrego:
       (`${panelBtn} *`)  ===>>> esto significa que cualquier:  * -----elemento hijo(seria el span que son las 3 lineas) dentro de panelBtn(que es el boton hamburguesa).
      */
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }

    if (e.target.matches(menu)) {
      d.querySelector(panel).classList.remove("is-active"); //remueve la clase is active y desaparece el panel
      d.querySelector(panelBtn).classList.remove("is-active"); //este lo tengo que hacer para que le boton hamburguesa vuelva a sus 3 rayitas originales
    }
  });
}
