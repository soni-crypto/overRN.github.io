function animateTextarea() {
    const noteCtn = document.getElementById("note-block-textarea");
    const containerIcons = document.getElementById("images-for-animate-loguitos");
    noteCtn.addEventListener("input",()=>{
        containerIcons.removeAttribute("hidden");
        // setTimeout(()=>{
        //     containerIcons.setAttribute("hidden", "true");
        // },3000)
    })
}
animateTextarea(); 