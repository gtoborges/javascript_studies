console.log(7 / 0) // Não gera erro. Operação = infinity
console.log("10" / 2) // Se for possível transformar em número, a operação será realizada
console.log('3' + 2) // Ao somar algo com um tipo string, será feita uma concatenação (.concat())
console.log("Show!" * 2) // Se não reconhecer como número = NaN
console.log(0.1 + 0.7) // imprecisão por questões de performance, o resultado será 0.79999999
//console.log(10.toString()) // irá gerar um erro, necessário colocar parenteses na varíavel para chamar a função
console.log((10).toString(2))