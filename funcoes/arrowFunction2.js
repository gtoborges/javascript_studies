function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

let compararComThis = function (param) {
    console.log(this === param)
}

compararComThis(global)

const obj = {}
compararComThis = compararComThis.bind(obj)
compararComThis(global) // agora o this referencia o obj.
compararComThis(obj)

let compararComThisArrow = param => console.log(this === param)
compararComThisArrow(global) // na função arrow, o this aponta para o módulo atual ao qual ela pertence.
compararComThisArrow(module.exports)

compararComThisArrow = compararComThisArrow.bind(obj)
compararComThisArrow(obj) // mesmo com o bind, ao utilizar a função arrow continuará apontando para o módulo ao qual ela pertence.
compararComThisArrow(module.exports)