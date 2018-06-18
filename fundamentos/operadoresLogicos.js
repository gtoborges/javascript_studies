//Operadores lógicos

//OU -> ||
console.log('Tabela verdade do OU "||":')
console.log('V v V = ' + true || true)
console.log('V v F = ' + true || false)
console.log('F v V = ' + false || true)
console.log('F v F = ' + false || false)

//E -> &&
console.log('\nTabela verdade do E: ')
console.log('V ^ V = '.concat(true && true))
console.log('V ^ F = '.concat(true && false))
console.log('F ^ V = '.concat(false && true))
console.log('F ^ F = '.concat(false && false))
