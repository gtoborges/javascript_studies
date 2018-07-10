const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Honra ao mérito')
            break
        case 8: case 7: case 6:
            console.log('Aprovado')
            break
        case 5: case 4: case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(9)
imprimirResultado(8.9)
imprimirResultado(5.9)
imprimirResultado(0)
imprimirResultado(11)