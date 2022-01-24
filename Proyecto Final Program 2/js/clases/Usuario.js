export class Usuario {
    id
    nombre
    tipo_usuario
    contrasena
    constructor(id, nombre, contrasena, tipo_usuario) {
        this.id = id;
        this.contrasena = contrasena;
        this.nombre = nombre;
        this.tipo_usuario = tipo_usuario;
    }

    setId(id) {
        this.id = id
    }
    setNombre(nombre) {
        this.nombre = nombre
    }
    setContra(contrasena) {
        this.contrasena = contrasena
    }
    setTipo(tipo_usuario) {
        this.tipo_usuario = tipo_usuario
    }

    getId() {
        return this.id
    }

    getNombre() {
        return this.nombre
    }

    getContra() {
        return this.contrasena
    }

    getTipo() {
        return this.tipo_usuario
    }

    jugar(name) {

        let usuarios = JSON.parse(localStorage.getItem("usuarios"))
        for (const user of usuarios) {
            if (user.nombre == name) {
                console.log("entro")
                window.location = "partida.html"
                return
            }
        }

        let newusuario = new Usuario(usuarios.length + 1, name, "", 'J')
        let usuarioD = {
            id: newusuario.getId(),
            nombre: newusuario.getNombre(),
            contrasena: newusuario.getContra(),
            tipo_usuario: newusuario.getTipo(),
        }

        usuarios.push(usuarioD)
        localStorage.setItem("usuarios", JSON.stringify(usuarios))
        window.location = "partida.html"
    }

    login(name, password) {
        let usuarios = JSON.parse(localStorage.getItem("usuarios"))
        for (const user of usuarios) {
            if (user.nombre == name && user.contrasena == password) {
                window.location = "adminHome.html"
              
            } else {
                alert("Te equivocaste en iniciar sesion", "", "error")
               
            }
        }
    }

    cargarUsuariosAdministradores() {
        let usuario1 = new Usuario(1, "admi", "123", 'A')
        

        let usuarios = [{
                id: usuario1.getId(),
                nombre: usuario1.getNombre(),
                contrasena: usuario1.getContra(),
                tipo_usuario: usuario1.getTipo()
            }
        ]
        localStorage.setItem("usuarios", JSON.stringify(usuarios))

    }
}