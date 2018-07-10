Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota){
    if(nota.entre(9, 10)) {
        console.log('Horna ao mérito.')
    }
    else if(nota.entre(6, 8.99)){
        console.log('Aprovado.')
    }
    else if(nota.entre(0, 5.99)){
        console.log('Reprovado.')
    }
    else{
        console.log('Nota inválida')
    }
}

imprimirResultado(9.5)
imprimirResultado(6.5)
imprimirResultado(5)
imprimirResultado(11)