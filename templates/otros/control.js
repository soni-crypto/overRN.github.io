const btn0 = document.querySelectorAll(".buttonOPT")[0];
const btn1 = document.querySelectorAll(".buttonOPT")[1];
btn0.addEventListener("click", () => {
    const gitCmd = document.querySelector(".gitCmd")
    gitCmd.style.display = "block";
})
btn1.addEventListener("click", () => {
    const gitCmd = document.querySelector(".PSCmd")
    gitCmd.style.display = "block";
})