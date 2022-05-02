const tabla = document.querySelector(".contenedorDeDatos");
const guardar = document.getElementById("agregarDatosATabla");
const funcInsertarDatos = () => {
    const idU = document.querySelectorAll(".filaDeDatos");
    const nombres = document.querySelectorAll(".inputDeDatos")[0].value;
    const apellidos = document.querySelectorAll(".inputDeDatos")[1].value;
    const codigo = document.querySelectorAll(".inputDeDatos")[2].value;
    const ocupacion = document.querySelectorAll(".inputDeDatos")[3].value;
    const deuda = document.querySelectorAll(".inputDeDatos")[4].value;
    const ahorro = document.querySelectorAll(".inputDeDatos")[5].value;
    const tipoCliente = document.querySelectorAll(".inputDeDatos")[6].value;

    let datosParaAgregar = [nombres, apellidos, codigo, ocupacion, deuda, ahorro, tipoCliente];

    let id = idU.length + 1;


    const trNew = document.createElement("tr");
    trNew.classList.add("filaDeDatos");
    if (nombres !== "" && apellidos !== "" && codigo !== "" && ocupacion !== "" && deuda !== "" && ahorro !== "" && tipoCliente !== "") {
        const tdNewId = document.createElement("td");
        tdNewId.classList.add("columnaDeDatos");
        tdNewId.textContent = id;
        trNew.appendChild(tdNewId);
        id++;

        datosParaAgregar.forEach((inputD) => {
            const tdNew = document.createElement("td");
            tdNew.classList.add("columnaDeDatos");
            tdNew.textContent = inputD;
            trNew.appendChild(tdNew);
        });
        tabla.appendChild(trNew);
        datosParaAgregar.forEach((vacio) => {
            vacio.value = "";
        })
    } else {
        alert("Ingrese todos los campos !");
    };




}
guardar.onclick = funcInsertarDatos;

const buscar = document.querySelector(".inputDeBusqueda");
buscar.oninput = () => {
    const filaDeDatosAFiltrar = document.querySelectorAll(".filaDeDatos");
    filaDeDatosAFiltrar.forEach((persona) => {
        const nombreFijo = persona.querySelectorAll(".columnaDeDatos")[1];
        console.log("=>MM: " + nombreFijo)
        var expresion = new RegExp(buscar.value, "i")
        if (expresion.test(nombreFijo.textContent)) {
            nombreFijo.parentNode.style.display = '';

        } else {
            nombreFijo.parentNode.style.display = 'none';
        }
    })
}
const bodyP = document.querySelector(".containerPrincipal");
const botonesDeImportar = document.querySelectorAll(".btnTipoDeArchivo")[0];
const botonesDeImportar2 = document.querySelectorAll(".btnTipoDeArchivo")[1];
const botonesDeImportar3 = document.querySelectorAll(".btnTipoDeArchivo")[2];

function msgMostrar(cod) {
    const cajaMsg = document.createElement("div");
    const letra = document.createElement("span");
    cajaMsg.classList.add("mensajeNoImport");
    cajaMsg.style.marginLeft = cod.pageX + 'px';
    cajaMsg.style.marginTop = cod.pageY + 'px';
    letra.textContent = "No disponible por estar solo en el front";

    cajaMsg.appendChild(letra);
    bodyP.appendChild(cajaMsg);
    setTimeout(() => {
        const parar = document.querySelector(".mensajeNoImport");
        parar.remove();
    }, 1000)

}
botonesDeImportar.onclick = msgMostrar;
botonesDeImportar2.onclick = msgMostrar;
botonesDeImportar3.onclick = msgMostrar;
const columnaABorrar = document.querySelector(".contenedorDeDatos");
const funcBorrarFila = (e) => {

    e.target.parentNode.remove();
}
columnaABorrar.ondblclick = funcBorrarFila;