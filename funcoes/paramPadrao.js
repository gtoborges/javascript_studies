// estrategia 1 para gerar valor padrão
function soma1 (a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2 (a, b, c) {
    a = a !== undefined ? a : 1 // se for undefined, recebe o valor padrão
    b = 1 in arguments ? b : 1 // compara b com o 2 parâmetro passado (pos[1] no vetor arguments)
    c = isNaN(c) ? 1 : c // testa se o parametro é um número
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))