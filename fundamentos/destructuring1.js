// novo recurso do ES2015

const pessoa = {
    nome: 'Augusto',
    idade: 23,
    endereco: {
        logradouro: 'Rua qualquer',
        numero: 1075
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome = 'não possui' } = pessoa // definição de um valor padrão, caso não exista algum valor.
console.log(sobrenome)

const { endereco: { logradouro, numero, cep = '00-000000'} } = pessoa
console.log(logradouro, numero, cep)