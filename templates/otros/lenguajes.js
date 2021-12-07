let variable = 0
const data = () => {

    const lista = ["python", "javaScript", "php", "html", "css"];
    console.log(lista[variable]);

    document.getElementById("lenguaje").innerHTML = lista[variable];
    const imagen = document.getElementById("imagen");
    imagen.setAttribute("src", "./static/images/" + lista[variable] + ".png")
    variable = variable + 1;
    if (variable === 5) {
        variable = 0
    }
    // return lista;
};
const id = window.setInterval(data, 2000)