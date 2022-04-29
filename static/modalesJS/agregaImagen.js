var contadorDeEtiquetasI = 0;
var prefijoDeClasesDeEtiquetasI = "prefEtClasI";
const botonAgregarImagenNuevo = document.querySelector(".btnInsertarImagen");
const agregarImagenNuevo = () => {
    // console.log("https://www.muycomputer.com/wp-content/uploads/2014/10/facebook-logo.jpg");
    const contenidoCentro = document.querySelector(".contenidoCentro");
    const urlImagenInput = document.querySelector(".urlImagenAInsertar").value;
    const anchoImagen = document.querySelector(".tamañoImagenInsertar").value;
    const divImagen = document.createElement("div");
    const urlImagen = document.createElement("img");
    if (urlImagenInput.length > 1 && anchoImagen > 0) {

        urlImagen.style.width = anchoImagen + "px";
        divImagen.classList.add(prefijoDeClasesDeEtiquetasI + contadorDeEtiquetasI);
        contadorDeEtiquetasI++;
        urlImagen.src = urlImagenInput;
        divImagen.appendChild(urlImagen);
        contenidoCentro.appendChild(divImagen).value = "";
    } else {
        alert("Ingrese Link y Ancho correcto !!")
    }
}
botonAgregarImagenNuevo.addEventListener("click", agregarImagenNuevo);
// ###### Video insertar
var contadorDeEtiquetasV = 0;
var prefijoDeClasesDeEtiquetasV = "prefEtClasV";
const botonAgregarVideoNuevo = document.querySelector(".btnInsertarVideo");
const agregarVideoNuevo = () => {

    // console.log("https://www.muycomputer.com/wp-content/uploads/2014/10/facebook-logo.jpg");
    const contenidoCentro = document.querySelector(".contenidoCentro");
    const urlVideoInput = document.querySelector(".urlVideoAInsertar").value;
    const anchoVideo = document.querySelector(".tamañoVideoInsertar").value;
    let divVideo = document.createElement("div");
    divVideo.style.border = "1px solid cyan";
    divVideo.style.justifyContent = "center";
    if (urlVideoInput.includes(".mp4")) {
        const urlVideo = document.createElement("video");
        console.log("es mp4")
        if (urlVideoInput.length > 1 && anchoVideo > 0) {
            urlVideo.style.width = anchoVideo + "px";
            divVideo.classList.add(prefijoDeClasesDeEtiquetasI + contadorDeEtiquetasI);
            contadorDeEtiquetasV++;
            urlVideo.src = urlVideoInput;
            urlVideo.controls = "controls";
            divVideo.appendChild(urlVideo);
            contenidoCentro.appendChild(divVideo);
            document.querySelector(".urlVideoAInsertar").value = "";
        } else {
            alert("Ingrese Link y Ancho correcto !!")
        }
    } else {
        divVideo.innerHTML = urlVideoInput;
        contenidoCentro.appendChild(divVideo);
    }
}
botonAgregarVideoNuevo.addEventListener("click", agregarVideoNuevo);

{ /* <iframe width="560" height="315" src="https://www.youtube.com/embed/PP3kFOZz8NE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }