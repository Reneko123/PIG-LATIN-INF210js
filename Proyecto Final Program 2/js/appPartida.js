import { Partida } from "./clases/Partida.js"
import { Palabra } from "./clases/Palabra.js"
import { Nivel } from "./clases/Nivel.js"

let partida = new Partida()
let palabra = new Palabra()
let nivel = new Nivel()


let niveles = nivel.obtenerNiveles()
let palabras = palabra.cargarDatosEstaticos()

partida.obtenerPosiblesSoluciones(niveles[0].cantidad_palabras)

let bgenerarPalabra = document.getElementById("bgeneraroPalabra")

bgenerarPalabra.addEventListener("click", function() {
    let cantidadMaxPalabras = niveles[0].cantidad_palabras
    let palAleatoria = partida.generar_palabraAleatoria(cantidadMaxPalabras)
    let pal = document.getElementById("palabra")
    pal.innerHTML = palAleatoria
})

let bcomprobarSolucion = document.getElementById("bcomprobarSolucion")

bcomprobarSolucion.addEventListener("click", function() {
    partida.comprobar_Solucion()
})

let tiempoMax = niveles[0].tiempo_max
let time = tiempoMax * 60
const countdownEl = document.getElementById('countdown')
if (time == 0) {
    clearInterval(updateCountdown)
} else {
    setInterval(updateCountdown, 1000)
}

function updateCountdown() {
    const minutes = Math.floor(time / 60)
    let seconds = time % 60

    countdownEl.innerHTML = `${minutes}: ${seconds}`
    time--
    if (minutes == 0 && seconds == 0) {
        time = 0
        swal("Su tiempo se ha terminado", "", "warning")
        setTimeout(function() {
            swal.close()
            clearInterval(updateCountdown)
            location.href = "inicio.html"
        }, 3000)

        return

    }

   

}