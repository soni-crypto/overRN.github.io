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
var etiquetaAEditarGlobal = "";
const mostrarContenidoDelModificador = () => {
    const modifcadorDirecto = document.querySelector(".partesModalesModificador");
    modifcadorDirecto.style.display = "block";
}
const funcionSensorCuerpo = (evento) => {

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
const funcionTamañoLetraOpcion = () => {}
const funcionTipoLetraOpcion = () => {}
botonModificar.onclick = mostrarContenidoDelModificador;
cuerpoSensor.onclick = funcionSensorCuerpo;