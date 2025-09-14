const {ipcRenderer} = require("electron")


document.getElementById("camera-btn").addEventListener("click", () => {
    ipcRenderer.send("capture-screen");
})
