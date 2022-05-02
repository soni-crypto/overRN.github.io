var pausar = true;
const control = document.querySelector(".divVidFondo");
const funcpausarPrenderVideo = () => {
    const video = document.querySelector(".vidFondo");
    if (pausar === true) {
        pausar = false;
        const pauseImg = document.createElement("img");
        pauseImg.classList.add("imgPauseCentro");
        pauseImg.src = "../static/images/pause-solid.svg"
        pauseImg.style.position = "absolute";
        pauseImg.style.width = "3.5rem";
        pauseImg.style.zIndex = "1";
        pauseImg.style.top = "20rem";
        pauseImg.style.left = "12rem";
        control.appendChild(pauseImg);
        setTimeout(() => {
            const b = document.querySelector(".imgPauseCentro");
            b.remove();
        }, 400)
        video.pause();
    } else if (pausar === false) {

        pausar = true;
        const playImg = document.createElement("img");
        playImg.classList.add("imgPauseCentro");
        playImg.src = "../static/images/play-solid.svg"
        playImg.style.position = "absolute";
        playImg.style.width = "3.5rem";
        playImg.style.zIndex = "1";
        playImg.style.top = "20rem";
        playImg.style.left = "12rem";
        control.appendChild(playImg);
        setTimeout(() => {
            const c = document.querySelector(".imgPauseCentro");
            c.remove();
        }, 400)
        video.play();

    };
}
control.onclick = funcpausarPrenderVideo;

const cuerpoTikTok = document.querySelector(".cuerpoTik");
const logoInicio = document.querySelector(".fondoCelularInicio");
setTimeout(() => {
    logoInicio.style.display = "none";
    logoInicio.style.width = "0";
    logoInicio.style.height = "0";
    cuerpoTikTok.style.display = "block";
    const video = document.querySelector(".vidFondo");
    // video.autoplay;
}, 2000)