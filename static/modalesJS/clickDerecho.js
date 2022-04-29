const cuerpoClickDerecho = document.querySelector(".contenidoCentro");
const modalParaEliminarElemento = (e) => {
    let colorDeFondoDeLaLetraSeleccionada = e.target.style.backgroundColor;
    e.preventDefault();
    if (e.target.className !== "cuerpo" && e.target.className !== "contenidoCentro" && e.target.className !== "stilos")
        e.target.style.backgroundColor = "cyan";
    // e.target.style.color = "white"
    const cajaDeEliminarClickDerecho = document.createElement("div");
    const mensajeDeEliminarClickDerecho = document.createElement("h3");
    const botonDeEliminarClickDerecho = document.createElement("button");
    cajaDeEliminarClickDerecho.classList.add("cajaDeEliminarClickDerecho");
    cajaDeEliminarClickDerecho.style.left = e.pageX + "px";
    cajaDeEliminarClickDerecho.style.top = e.pageY + "px";

    mensajeDeEliminarClickDerecho.classList.add("mensajeDeEliminarClickDerecho")
    botonDeEliminarClickDerecho.classList.add("botonDeEliminarClickDerecho");

    mensajeDeEliminarClickDerecho.textContent = "Se eliminará la seccion seleccionada";
    botonDeEliminarClickDerecho.textContent = "Eliminar";
    cajaDeEliminarClickDerecho.appendChild(mensajeDeEliminarClickDerecho);
    cajaDeEliminarClickDerecho.appendChild(botonDeEliminarClickDerecho);
    cuerpoClickDerecho.appendChild(cajaDeEliminarClickDerecho);
    const removerEtiqueta = () => {

        e.target.remove();
    }
    document.querySelector(".botonDeEliminarClickDerecho").onclick = removerEtiqueta;
    const desactivarCajaDeEliminar = () => {
        if (document.querySelector(".cajaDeEliminarClickDerecho")) {
            document.querySelector(".cajaDeEliminarClickDerecho").remove();
            e.target.style.backgroundColor = "white";
        }
    }
    cuerpoClickDerecho.onclick = desactivarCajaDeEliminar;
}
cuerpoClickDerecho.oncontextmenu = modalParaEliminarElemento;