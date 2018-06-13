//Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//Função com retorno
function soma(a, b = 1) { //quando o valor não for passado, ele terá o valor padrão que foi definido
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
