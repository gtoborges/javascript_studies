// Usando a notação literal
const obj1 = {}

// Object em js
const obj2 = new Object

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
console.log(p1.getPrecoComDesconto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return ((salarioBase / 30) * (30 - faltas))
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
console.log(f1.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// JSON -> objeto
const fromJSON = JSON.parse('{"info": "JSON!"}')
console.log(fromJSON.info)