export default class ArrayDeNotas {
    constructor(){
        this.notas = [];
        this.inscritos = [];
    }

    inscrever(func) {
        this.inscritos.push(func)
    }

    notificar() {
        this.inscritos.forEach((func) => {
            func(this.notas)
        })
    } 

    adicionarNota (titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria)
         this.notas.push(novaNota)
         this.notificar()
        
    }

    apagarNota(index) {
        this.notas.splice(index, 1)
        this.notificar()
    }
}

class Nota {
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria
    }
}