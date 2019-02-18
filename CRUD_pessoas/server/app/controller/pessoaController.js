const db = require('../models');
const Pessoa = db.pessoas;

// Achar todas as pessoas - c/ async/await
// exports.findAll = async (req, res) => {
//     console.log('Buscando todas as pessoas...')
//     const todasPessoas = await Pessoa.findAll();
//     return res.send(todasPessoas);
// }

// Achar todas as pessoas sem async/await
exports.findAll = (req, res) => {
    console.log('Buscando todas as pessoas...')
    Pessoa.findAll().then(function(todasPessoas){
        return res.send(todasPessoas);
    });
}

//Criar uma pessoa - c/ async/await
// exports.create = async (req, res) => {
//     console.log('Cadastrando pessoa')   
//     let pessoa = await Pessoa.create(req.body);
//     console.log(`${pessoa.nome} cadastrado com sucesso`)
// 	   return res.send(pessoa);
// };

//Criar uma pessoa - s/ async e await
exports.create = (req, res) => {
    console.log('Criando pessoa...')
    let pessoa = req.body
    Pessoa.create(pessoa).then(function(pessoa){
        console.log(`${pessoa.nome} cadastrado no banco de dados`)
        return res.send(pessoa)
    });
}

//Buscar uma pessoa - s/ async e await
exports.findById = (req, res) => {
    let id = req.params.id;
    console.log(`\n\n\n Buscando por id de nº: ${id} \n\n\n`)
    Pessoa.findById(id).then(function(pessoaAchada){
        console.log(`
        id: ${pessoaAchada.id}
        nome: ${pessoaAchada.nome}
        email: ${pessoaAchada.email}
        endereco: ${pessoaAchada.endereco}
        sexo: ${pessoaAchada.sexo}
        idade: ${pessoaAchada.idade}
        ativo: ${pessoaAchada.ativo}
        `)
        return res.send(pessoaAchada)
    });
}

//Atualizar uma pessoa por id - s/ async e await
exports.updateById = (req, res) => {
    let pessoa = req.body;
    console.log(pessoa)
    Pessoa.update(pessoa, {where: {id: req.params.id}} ).then(function(pessoaAtualizada){
        return res.send(pessoaAtualizada)
    });
}

//Deletar uma pessoa por id - s/ async e away
exports.deleteById = (req, res) => {
    let id = req.params.id;
    console.log(`Exluindo pessoa de ID ${id}`)
    Pessoa.destroy( {where: {id: req.params.id} } ).then(function(){
        console.log(`Pessoa de ID ${id} excluída`)
        return res.send()
    });
}

//buscar por parametro - s/ async e await ----- implementar depois
exports.findByParameter = (req, res) => {
    console.log('chegou aqui');
    let query = req.query;
    console.log(`
    ${query.sexo}
    ${query.nome} 
    ${query.id}
    ${query.email}
    `)
    console.log('chegou aqui 2');
    Pessoa.FindOne({  }).then(function(pessaAchada){
        return res.send(pessoaAchada)
    });
}