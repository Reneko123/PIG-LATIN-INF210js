import { Usuario } from "./clases/Usuario.js";
import { Partida } from "./clases/Partida.js";

let usuario = new Usuario()
let partida = new Partida()


if (!localStorage.getItem("usuarios")) {
    usuario.cargarUsuariosAdministradores()
}
let ruta = window.location.pathname.substring(7, window.location.pathname.length)
if (ruta == "adminLogin.html") {
    let blogin = document.getElementById("blogin")
    blogin.addEventListener("click", function() {
        let name = document.getElementById("nombre").value
        let pass = document.getElementById("password").value
        usuario.login(name, pass)
    })
} else if (ruta == "inicio.html") {
    let bjugar = document.getElementById("bjugar")
    bjugar.addEventListener("click", () => {
        let name = document.getElementById("nombre").value
            /*  let partida = new Partida(name, id) */
        usuario.jugar(name)
    })
}