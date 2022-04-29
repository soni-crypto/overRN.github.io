const contGeneralBody = document.getElementById("contenedor-general");
const cuerpoDeModificador = document.querySelector(".partesModalesModificador");

const cuerpoSensor = document.querySelector(".cuerpo");
const botonModificar = document.querySelectorAll(".btn-estilos")[1];
const etiquetaAModificar = document.getElementById("etiquetaAModificar");
const btnGuadarCambios = document.querySelector(".guardarCambiosNuevos");
const codigoHtmlPantalla = document.querySelector(".codigoHtmlPantalla");
const tamañoDeLetra = document.querySelector(".tamañoDeLetraModificador");
// BOTONES DE MODIFICACION
const btnModificadorIntTamaño = document.querySelectorAll(".btnModificadorInt")[0];
const btnModificadorIntLetra = document.querySelectorAll(".btnModificadorInt")[1];
const btnModificadorIntColor = document.getElementById("colorModificadorInput");
const btnModificadorIntMargen = document.querySelectorAll(".btnModificadorInt")[3];

var etiquetaAEditarGlobal = "";
var cantidaDeMargen = 0;
const mostrarContenidoDelModificador = () => {
    const modifcadorDirecto = document.querySelector(".partesModalesModificador");
    modifcadorDirecto.style.display = "block";
}
const funcionSensorCuerpo = (evento) => {
    evento.preventDefault();

    // codigoHtmlPantalla.textContent = evento.target;
    // console.log(evento.target.className);
    etiquetaAEditarGlobal = document.querySelector("." + evento.target.className);
    if (evento.target.className !== "cuerpo" && evento.target.className !== "cabezera" && evento.target.className !== "contenidoCentro" && evento.target.className !== "pie") {
        etiquetaAModificar.value = etiquetaAEditarGlobal.textContent;
        const funcionGuardarCambios = () => {
            etiquetaAEditarGlobal.style.fontSize = btnModificadorIntTamaño.value;
            etiquetaAEditarGlobal.style.fontFamily = btnModificadorIntLetra.value;
            etiquetaAEditarGlobal.style.color = btnModificadorIntColor.value;
        }
        btnGuadarCambios.addEventListener("click", funcionGuardarCambios);
    }
}
const actualizarDataEnTiempoReal = () => {
    // console.log(etiquetaAEditarGlobal)
    // console.log("valor nuevo " + etiquetaAModificar.value)
    const valorNuevo = etiquetaAModificar.value;
    etiquetaAEditarGlobal.textContent = valorNuevo;
}
const functionMargenLetra = (e) => {
    if (cantidaDeMargen <= 10) {
        cantidaDeMargen += 2;
        etiquetaAEditarGlobal.parentNode.style.marginLeft = cantidaDeMargen + "rem";
    }
}
btnModificadorIntMargen.onclick = functionMargenLetra;

const funcionTamañoLetraOpcion = () => {}
const funcionTipoLetraOpcion = () => {}


cuerpoSensor.onclick = funcionSensorCuerpo;
botonModificar.onclick = mostrarContenidoDelModificador;
const mensajeDeModificarNone = (pose) => {

    const ventana = document.querySelector(".hoverFlotanteMensaje");
    ventana.style.display = "block";


}
const mensajeDeModificarBlock = () => {
    const ventana = document.querySelector(".hoverFlotanteMensaje");
    ventana.style.display = "none";

}
botonModificar.onmouseenter = mensajeDeModificarNone;
botonModificar.onmouseleave = mensajeDeModificarBlock;