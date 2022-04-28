var contadorDeEtiquetasS = 0;
var prefijoDeClasesDeEtiquetasS = "prefEtClasS";
const botonAgregarTextoNuevo = document.querySelector(".submitTexto");
const funcionAgregar = () => {
    let btnModificadorIntLetra2 = document.querySelectorAll(".btnModificadorInt2")[0].value;
    let btnModificadorIntTamaño2 = document.querySelectorAll(".btnModificadorInt2")[1].value;
    let tipoDeEtiqueta = "p";
    const textoAAgregar = document.getElementById("textoAPoner").value;
    const colorDeTexto = document.getElementById("colorTexto").value;
    const saltoDeLinea = document.getElementById("saltoDeLinea").checked;
    const lineaSeguida = document.getElementById("lineaSeguida").checked;

    const contenidoCentro = document.querySelector(".contenidoCentro");
    if (lineaSeguida === true) {} else {
        const BR = document.createElement("br");
        contenidoCentro.appendChild(BR);

    }
    console.log(btnModificadorIntLetra2);
    console.log(btnModificadorIntTamaño2);
    const etiquetaPAAgregar = document.createElement("span");
    etiquetaPAAgregar.classList.add(prefijoDeClasesDeEtiquetasS + contadorDeEtiquetasS)
    etiquetaPAAgregar.textContent = textoAAgregar;
    etiquetaPAAgregar.style.fontFamily = btnModificadorIntLetra2;
    etiquetaPAAgregar.style.fontSize = btnModificadorIntTamaño2;
    etiquetaPAAgregar.style.color = colorDeTexto;
    contadorDeEtiquetasS++;
    contenidoCentro.appendChild(etiquetaPAAgregar);
    document.getElementById("textoAPoner").value = " ";

};
botonAgregarTextoNuevo.addEventListener("click", funcionAgregar);