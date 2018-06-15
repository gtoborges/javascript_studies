// par nome/valor

const saudacao = 'olar' // contexto léxico 1

function exec(){
    const saudacao = 'falae' // contexto léxico 2
    return saudacao
}

console.log(saudacao)
console.log(exec())

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 30,
    peso: 90,
    endereco: {
        logradouro: 'rua',
        numero: 123
    }
}

console.log(cliente)
