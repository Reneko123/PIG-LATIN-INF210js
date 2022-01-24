import { Nivel } from "./clases/Nivel.js"

let nivel = new Nivel()

let bcrearNivel = document.getElementById("bcrearNivel")

bcrearNivel.addEventListener("click", function() {
    let nroNivel = document.getElementById("nroNivel").value
    let tiempoMax = document.getElementById("tiempoMax").value
    let cantidadPal = document.getElementById("cantidadPal").value
    nivel.crearNivel(nroNivel, tiempoMax, cantidadPal)
})