const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

// Object.entries(pessoa).forEach(e => { //log semelhante ao debaixo
//     console.log(`${e[0]}: ${e[1]}`)
// })
console.log('\n')
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

console.log('\n')
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false, //semelhante ao Object.freeze()
    value: '01/01/2019'
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)
console.log(obj)

