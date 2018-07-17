let dobro = function (a) {
    return 2*a
}

dobro = (a) => {
    return 2*a
}

dobro = a => 2*a //return implícito (possível tirar o parenteses se tiver apenas um parâmetro)

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // aqui nenhum parâmetro é passado (padrão)
ola = _ => 'Olá' // "_" é passado como parâmetro, mas ele pode ser ignorado

