const botMensajero = document.querySelector(".botMensajero");
const cerrarMensajero = document.querySelector(".cerrarChatConWall");
const modalWall = document.querySelector(".modalChatWall");
const cerrarMensajeApublico = document.querySelector(".cerrarMensajeDeEva");
cerrarMensajero.onclick = () => {
    modalWall.style.display = "none";
};
botMensajero.onclick = () => {
    modalWall.style.display = "block";
}
cerrarMensajeApublico.onclick = () => {
    document.querySelector(".mensajeDeEvaAPublico").style.display = "none";
}