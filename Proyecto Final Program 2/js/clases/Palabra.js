export class Palabra {
    _id;
    _texto;
    _textoPig;

    constructor(texto, textoPig) {
        this.texto = texto
        this.textoPig = textoPig
    }

    setTexto(texto1) {
        this.texto = texto1
    }
    getTexto() {
        return this.texto
    }

    setTextoPig(textoPig1) {
        this.textoPig = textoPig1
    }
    getTextoPig() {
        return this.textoPig
    }

    cargarDatosEstaticos() {
        let palabra1 = new Palabra("gato", "atoga");
        let palabra2 = new Palabra("pascal", "acalpas");
        let palabra3 = new Palabra("pig latin", "apig atinla");
        let palabra4 = new Palabra("color", "alorco");
        let palabra5 = new Palabra("banana", "aananab");
        let palabra6 = new Palabra("messi", "essmay");
        let palabra7 = new Palabra("palido", "adolipa");
        let palabra8 = new Palabra("apple", "appleyay");
        let palabra9 = new Palabra("hello", "ellohay");
        let palabra10 = new Palabra("elephant", "elephantyay");


        let palabras = [{
                texto: palabra1.getTexto(),
                textoPig: palabra1.getTextoPig(),
            },
            {
                texto: palabra2.getTexto(),
                textoPig: palabra2.getTextoPig(),
            },
            {
                texto: palabra3.getTexto(),
                textoPig: palabra3.getTextoPig(),
            },
            {
                texto: palabra4.getTexto(),
                textoPig: palabra4.getTextoPig(),
            },
            {
                texto: palabra5.getTexto(),
                textoPig: palabra5.getTextoPig(),
            },
            {
                texto: palabra6.getTexto(),
                textoPig: palabra6.getTextoPig(),
            },
            {
                texto: palabra7.getTexto(),
                textoPig: palabra7.getTextoPig(),
            },
            {
                texto: palabra8.getTexto(),
                textoPig: palabra8.getTextoPig(),
            },
            {
                texto: palabra9.getTexto(),
                textoPig: palabra9.getTextoPig(),
            },
            {
                texto: palabra10.getTexto(),
                textoPig: palabra10.getTextoPig(),
            },
        ]

        localStorage.setItem("palabras", JSON.stringify(palabras))
    }
}