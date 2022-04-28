const salirCmd = document.querySelector(".salirCmd");
const salirCmdPS = document.querySelector(".salirCmdPS");
salirCmd.addEventListener("click", () => {
    const cerrarCmd = document.querySelector(".gitCmd");
    cerrarCmd.style.display = "none";
});
salirCmdPS.addEventListener("click", () => {
    const cerrarCmd = document.querySelector(".PSCmd");
    cerrarCmd.style.display = "none";
})