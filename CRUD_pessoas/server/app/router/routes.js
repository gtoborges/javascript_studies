const express = require('express');
const routes = express.Router();

const pessoaController = require('../controller/pessoaController')

//criar nova pessoa
routes.post('/insert', pessoaController.create);

//buscar por todas as pessoas
routes.get('/find-all', pessoaController.findAll);

//buscar por id
routes.get('/find-by-id/:id', pessoaController.findById);

//atualizar por id
routes.put('/update/:id', pessoaController.updateById);

//deletar por id
routes.delete('/delete/:id', pessoaController.deleteById);

//buscar por parâmetro
routes.get('/find-by-param', pessoaController.findByParameter);


module.exports = routes;