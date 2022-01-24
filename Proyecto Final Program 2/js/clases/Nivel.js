export class Nivel {
    _nroNivel
    _tiempoMax
    _cantidadPal
    _ganador

    constructor(nroNivel, tiempoMax, cantidadPal, ganador) {
        this._cantidadPal = cantidadPal
        this._tiempoMax = tiempoMax
        this._ganador = ganador
        this._nroNivel = nroNivel
    }

    settiemmpoMax(tiempoMax1) {
        this._tiempoMax = tiempoMax1
    }
    setcantidadPal(cantidadPal1) {
        this._cantidadPal = cantidadPal1
    }
    setganador(ganador1) {
        this._ganador = ganador1
    }
    setNroNivel(nroNivel1) {
        this._nroNivel = nroNivel1
    }

    gettiempoMax() {
        return this._tiempoMax
    }
    getcantidadPal() {
        return this._cantidadPal
    }
    getganador() {
        return this._ganador
    }
    getNroNivel() {
        return this._nroNivel
    }


    crearNivel(nroNivel, tiempoMax, numPal) {
        console.log(nroNivel.toString(), tiempoMax.toString(), numPal.toString())
        let newnivel = new Nivel(nroNivel, tiempoMax, numPal, "")
        let nivelD = {
            nro_nivel: newnivel.getNroNivel(),
            tiempo_max: newnivel.gettiempoMax(),
            cantidad_palabras: newnivel.getcantidadPal(),
            ganador: "",
        }

        if (!localStorage.getItem("niveles")) {
            let niveles = [nivelD]
            localStorage.setItem("niveles", JSON.stringify(niveles))
        } else {
            let niveles = JSON.parse(localStorage.getItem("niveles"))
            niveles.push(nivelD)
            localStorage.setItem("niveles", JSON.stringify(niveles))
        }
    }


    actualizarNivel(nroNivel, tiempoMax, numPal) {
        let niveles = JSON.parse(localStorage.getItem("niveles"))
        for (const nivel of niveles) {
            if (nivel.nro_nivel == nroNivel) {

            }
        }
    }

    obtenerNiveles() {
        let niveles = JSON.parse(localStorage.getItem("niveles"))
        return niveles
    }

}