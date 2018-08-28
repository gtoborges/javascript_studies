const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla' //não sobrescreverá pois a propriedade writable é false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

console.log(!!filha2.hasOwnProperty('nome')) //true
console.log(!!filha2.hasOwnProperty('corCabelo')) //false

for(let key in filha2){
    filha2.hasOwnProperty(key) ? // if ? true : false
        console.log(`Atributo do próprio objeto: ${key}`) : console.log(`Atributo recebido por herança: ${key}`)
}