const lista = ["python", "javascript", "php", "html", "css"];
let variable = 1;
const data = () => {
    const letra = document.getElementById("lenguaje");
    letra.innerHTML = lista[variable];
    const imagen = document.getElementById("imagen");
    imagen.setAttribute("src", "./static/images/" + lista[variable] + ".png")
    variable = variable + 1;
    if (variable === 5) {
        variable = 0
    }

};
window.setInterval(data, 2000)