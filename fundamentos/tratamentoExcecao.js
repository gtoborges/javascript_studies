function tratarErroELancar(erro) {
    throw new Error('deu ruim')
    // throw 10
    // throw true
    // throw 'mensagem'
    // throw {
    //    nome: erro.name,
    //    msg: erro.message,
    //    date: new Date
    //}

}

function imprimirNomeMaiusculo(obj) {
    try{
        console.log(obj.name.toUpperCase())
    } catch (e) {
        tratarErroELancar(e)
    }
    finally {
        console.log('final')
    }
}

const obj = { nome: 'roberto'}
imprimirNomeMaiusculo(obj)