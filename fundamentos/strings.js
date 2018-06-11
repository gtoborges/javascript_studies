const escola = "Cod3r"

console.log(escola.charAt(4)) // char na posição do vetor
console.log(escola.charAt(5)) // não retorna nenhum valor 
console.log(escola.charCodeAt(3)) // valor na tabela Unicode/ASC
console.log(escola.indexOf('C')) // retorna a posição do vetor do char que foi passado como parâmetro

console.log(escola.substring(1)) // imprime parte da string a partir da posição passada como parâmetro
console.log(escola.substring(0, 4)) // imprime parte da string passada como parâmetro (última posição passada não é impressa) (0, 4 irá imprimir {[0][1][2][3]})

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!") 
console.log(escola.replace(3, 'e'))

console.log("Ana,Maria,Pedro".split(',')) // divide no parâmetro passado e organiza em um vetor