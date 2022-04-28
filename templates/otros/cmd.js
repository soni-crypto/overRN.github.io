const pantalla = document.querySelector(".textoEntradaCmd");
const codeCommand = document.querySelector(".codeCommand");
codeCommand.addEventListener("change", (event) => {
    const valor = event.target.value;
    pantalla.textContent = valor;
    codeCommand.value = "";

})