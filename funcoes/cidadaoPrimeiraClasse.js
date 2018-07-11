// Função em JS é First-Class Object
// Higher-order function

//criar de forma literal
function funcao1() { }

//armazenar em uma variável
const funcao2 = function () { }

//armazenar em um array
const array = [function(a, b) {return a + b}, funcao1, funcao2]
console.log(array[0](2, 3))

//armazenar em um atributo do objeto
const obj = {}
obj.falar = function () { return 'Alo'}
console.log(obj.falar())

//passar uma função como parâmetro
function run(fun) {
    fun()
}

//uma função pode retornar/conter uma função