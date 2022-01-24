export class Puntaje {
    _id
    _nivel
    _puntosganados

    constructor(nivel, puntosganados) {
        this._nivel = nivel
        this._puntosganados = puntosganados
    }

    //
    set setnivel(nivel1) {
        this._nivel = nivel1
    }
    get getpuntosganados() {
            return this._puntosganados
        }
        //
    set setpuntosganados(puntosganados1) {
        this._puntosganados = puntosganados1
    }
    get getpuntosganados() {
        return this._puntosganados
    }


}