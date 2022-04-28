const cerrar0 = document.querySelector(".cerrarAgregar");
const cerrarTextoInput = document.querySelector(".cerrarTextoInput");
const cerrarImagenInput = document.querySelector(".cerrarImagenInput");
const VentanaModificador = document.querySelector(".cerrarVentanaModificador");
const cerrarBienvenida = document.querySelector(".cerrarVentanaBienvenida");

const funCerrarBienvenida = () => {

    const Bienvenida = document.querySelector(".Bienvenida");
    Bienvenida.style.display = "none";
}
cerrarBienvenida.onclick = funCerrarBienvenida;

const cerrarAgregar = () => {
    const partesModales = document.querySelector(".partesModales");
    partesModales.style.display = "none";
}
const cerrarTipoTitulo = () => {
    const tipoTitulo = document.querySelector(".tipoTitulo");
    tipoTitulo.style.display = "none";
}
const cerrarModalTextoInput = () => {
    const agregarTextoACuerpo = document.querySelector(".agregarTextoACuerpo");
    agregarTextoACuerpo.style.display = "none";
}
const cerrarModalImagenInput = () => {
    const agregarImagenACuerpo = document.querySelector(".agregarImagenACuerpo");
    agregarImagenACuerpo.style.display = "none";
}
const funcionVentanaModificador = () => {

    const modifcadorDirecto = document.querySelector(".partesModalesModificador");
    modifcadorDirecto.style.display = "none";
}

cerrar0.onclick = cerrarAgregar;
const cerrarOPTtitulo = document.querySelector(".cerrarVentanaDeTitulo");
cerrarOPTtitulo.onclick = cerrarTipoTitulo;
cerrarTextoInput.onclick = cerrarModalTextoInput;
cerrarImagenInput.onclick = cerrarModalImagenInput;
VentanaModificador.onclick = funcionVentanaModificador;