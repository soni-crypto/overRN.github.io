const typed = new Typed('.typed', {
    strings: ['python en BackEnd.',
        'javascript en FrontEnd.',
        'php en BackEnd.',
        'html, sin duda control total.',
        'css y estilos nativos.',
        'react, ya que es muy popular.',
        'etc.'
    ],
    //stringsElement: '#cadena-texto',
    typeSpeed: 75, // velocidad en milisegundos para poner una letra 
    startDelay: 300, // tiempo de retraso en iniciar la animacion
    backSpeed: 75, // velocidad en milisegundos para borrar una letra
    shuffle: true, // alterar la orden en el que escribe palabras
    backDelay: 1500, // tiempo de espera despues de que termine dee escribir una palabra
    loop: true, // repetir el array
    loopCount: false, // cantidad de veces al repetir el array , false = infinito
    showCursor: true, // mostrar cursor palpitando
    cursorChar: '|', //carater para el cursor
    contentType: 'html' // 'html' o 'null' para texto sin formato
});