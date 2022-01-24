export class Partida {
    _id
    _nombreUsuario

    constructor(nombreUsuario, id) {
        this._nombreUsuario = nombreUsuario
        this._id = id
    }

    setNombreUsuario(_nombreUsuario1) {
        this._nombreUsuario = _nombreUsuario1
    }
    getNombreUsuario() {
        return this._usuario
    }

    crearPartida(id, nombreUsuario) {

    }

    obtenerPosiblesSoluciones(cantidadMaxPalabras) {
        let palabras = JSON.parse(localStorage.getItem("palabras"))
        const opciones = palabras.slice(0, cantidadMaxPalabras)
        const selectopciones = document.getElementById('opcionesSelect')
        const fragment = document.createDocumentFragment()


        for (const opcion of opciones) {
            const selectItem = document.createElement('option')
            selectItem.setAttribute('value', opcion.textoPig.toLowerCase())
            selectItem.textContent = opcion.textoPig
            fragment.appendChild(selectItem)
        }

        selectopciones.appendChild(fragment)
    }

    generar_palabraAleatoria(cantidadMaxPalabras) {
        let palabras = JSON.parse(localStorage.getItem("palabras"))
        let numrandom = Math.floor(Math.random() * (cantidadMaxPalabras - 0)) + 0
        localStorage.setItem("numeroRandom", numrandom)
        return palabras[numrandom].texto
    }

    comprobar_Solucion() {
        let palabras = JSON.parse(localStorage.getItem("palabras"))
        let opcionesSelect = document.getElementById('opcionesSelect');
        let lenguaje = opcionesSelect.value;
        let index = JSON.parse(localStorage.getItem("numeroRandom"))
        console.log(index)
        if (lenguaje.toLowerCase() == palabras[index].textoPig.toLowerCase()) {
            swal("Su seleccion es Correcta", "", "success")
        } else {
            swal("Su seleccion es Incorrecta", "", "error")
        }
        console.log(index)

    }
    

}