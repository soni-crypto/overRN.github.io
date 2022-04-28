var contadorDeEtiquetasH = 0;
var prefijoDeClasesDeEtiquetasH = "prefEtClasH";
const botonAgregar = document.querySelectorAll(".btn-estilos")[0];
// const botonModificar = document.querySelectorAll(".btn-estilos")[1];


const listaEtiquetas = ["Título", "Texto", "imagen", "Input", "Boton", "Navegacion"];
let cuerpo = document.querySelector(".contenedorDeBotonesEtiquetas");
let contador = 0;
// AGREGO BOTONES QUE SON PARA AGREGAR
function mostrarContenido() {
    var ventanaDeAgregar = document.querySelector(".partesModales");
    ventanaDeAgregar.style.display = "block";
    ventanaDeAgregar.style.height = "18rem";
    if (document.querySelector(".etiquetaBtnAppend") === null) {
        // console.log(document.querySelector(".etiquetaBtnAppend"));
        listaEtiquetas.forEach((etiqt) => {
            // const divE = document.createElement("div");
            const btnDeListas = document.createElement("button");
            btnDeListas.classList.add("etiquetaBtnAppend");
            btnDeListas.textContent = etiqt;
            cuerpo.appendChild(btnDeListas);
            // cuerpo.appendChild(divE);
            // contador++;
        })
        const capturaDeBoton = () => {
            const tipoTitulo = document.querySelector(".tipoTitulo");
            tipoTitulo.style.display = "block";
            // console.log("desplegando am mas");
        };
        const textoAgregarACuerpo = () => {
            const textoInput = document.querySelector(".agregarTextoACuerpo");
            textoInput.style.display = "block";
        };
        const ImagenAgregarACuerpo = () => {
            const imagenInput = document.querySelector(".agregarImagenACuerpo");
            imagenInput.style.display = "block";
        };
        const btnTituloAgregar = document.querySelectorAll(".etiquetaBtnAppend")[0];
        const btnTextoAgregar = document.querySelectorAll(".etiquetaBtnAppend")[1];
        const btnImagenAgregar = document.querySelectorAll(".etiquetaBtnAppend")[2];
        // console.log("mmmomomo" + btnTituloAgregar.className)
        btnTituloAgregar.addEventListener("click", capturaDeBoton);
        btnTextoAgregar.addEventListener("click", textoAgregarACuerpo);
        btnImagenAgregar.addEventListener("click", ImagenAgregarACuerpo);
    }
};
// CAPTURO LA UBICACION DE LOS CLICKS
const calculadorDeEjes = (event) => {
    var ejeX = event.x - 184;
    var ejeY = event.y - 83;
}
const agregandoAlArchivo = () => {
    const contenidoCentro = document.querySelector(".contenidoCentro");
    const textoTitulo = document.querySelector(".textoTitulo").value;
    const tituloValor = document.getElementById("tituloEscojido").value;
    const cajaBorde = document.createElement("div");
    if (tituloValor === "h1") {
        const tipoTituloAAgregar = document.createElement("h1");
        tipoTituloAAgregar.textContent = textoTitulo;
        tipoTituloAAgregar.style.fontFamily = "Arial";
        tipoTituloAAgregar.classList.add(prefijoDeClasesDeEtiquetasH + contadorDeEtiquetasH)
        contadorDeEtiquetasH++;
        contenidoCentro.appendChild(tipoTituloAAgregar);
        document.querySelector(".textoTitulo").textContent = "";
    } else if (tituloValor === "h2") {
        const tipoTituloAAgregar = document.createElement("h2");
        tipoTituloAAgregar.textContent = textoTitulo;
        tipoTituloAAgregar.style.fontFamily = "Arial";
        tipoTituloAAgregar.classList.add(prefijoDeClasesDeEtiquetasH + contadorDeEtiquetasH)
        contadorDeEtiquetasH++;
        contenidoCentro.appendChild(tipoTituloAAgregar);
        document.querySelector(".textoTitulo").textContent = "";
    } else if (tituloValor === "h3") {
        const tipoTituloAAgregar = document.createElement("h3");
        tipoTituloAAgregar.textContent = textoTitulo;
        tipoTituloAAgregar.style.fontFamily = "Arial";
        tipoTituloAAgregar.classList.add(prefijoDeClasesDeEtiquetasH + contadorDeEtiquetasH)
        contadorDeEtiquetasH++;
        contenidoCentro.appendChild(tipoTituloAAgregar);
        document.querySelector(".textoTitulo").textContent = "";
    } else if (tituloValor === "h4") {
        const tipoTituloAAgregar = document.createElement("h4");
        tipoTituloAAgregar.textContent = textoTitulo;
        tipoTituloAAgregar.style.fontFamily = "Arial";
        tipoTituloAAgregar.classList.add(prefijoDeClasesDeEtiquetasH + contadorDeEtiquetasH)
        contadorDeEtiquetasH++;
        contenidoCentro.appendChild(tipoTituloAAgregar);
        document.querySelector(".textoTitulo").textContent = "";
    } else if (tituloValor === "h5") {
        const tipoTituloAAgregar = document.createElement("h5");
        tipoTituloAAgregar.textContent = textoTitulo;
        tipoTituloAAgregar.style.fontFamily = "Arial";
        tipoTituloAAgregar.classList.add(prefijoDeClasesDeEtiquetasH + contadorDeEtiquetasH)
        contadorDeEtiquetasH++;
        contenidoCentro.appendChild(tipoTituloAAgregar);
        document.querySelector(".textoTitulo").textContent = "";
    } else if (tituloValor === "h6") {
        const tipoTituloAAgregar = document.createElement("h6");
        tipoTituloAAgregar.textContent = textoTitulo;
        tipoTituloAAgregar.style.fontFamily = "Arial";
        tipoTituloAAgregar.classList.add(prefijoDeClasesDeEtiquetasH + contadorDeEtiquetasH)
        contadorDeEtiquetasH++;
        contenidoCentro.appendChild(tipoTituloAAgregar);
        document.querySelector(".textoTitulo").textContent = "";
    }

}

botonAgregar.onclick = mostrarContenido;

var ubicacion = document.querySelector(".cuerpo");
ubicacion.onclick = calculadorDeEjes;
const agregarTituloAlArchivo = document.querySelector(".agregarTituloAlArchivo");
agregarTituloAlArchivo.onclick = agregandoAlArchivo;