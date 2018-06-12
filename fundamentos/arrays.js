const valores = [7.7, 8.9, 6.63, 8.50] // embora não seja uma boa prática, é possível misturar dados (estrutura heterogênea).
console.log(valores[0], valores[3])
console.log(valores[4]) //não gera erra, passa como undefined caso o elemento esteja vazio.

valores[4] = 10
console.log(valores)

valores[6] = 11
console.log(valores)

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)
console.log(valores.length)

console.log('removendo ultimo valor do vetor: ' + valores.pop()) //remove o ultimo elemento do vetor e retorna ele.
delete valores[0]

console.log(valores)
console.log(typeof valores)
