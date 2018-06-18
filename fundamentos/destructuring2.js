const [a] = [10]

const [n1, , n3, n4, n5 = 0] = [1, 2, 3, 4] // obs: o posição[2] foi deixado em branco
console.log(n1, n3, n4, n5)

const [, [, nota]] = [[, 2, 3], [1, 2, 3]]
console.log(nota)
