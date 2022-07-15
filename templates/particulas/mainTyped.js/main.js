const typed = new Typed('.typed', {
    strings: ['Base de datos',
        'Visión artificial',
        'Análisis de datos',
        'Desarrollo web',
        'Scripting',
        'Web scraping',
        'Etc..',
        
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
