const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const db = require('./app/models');


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(cors())

const PessoaRoutes = require('./app/router/routes')
app.use('/', PessoaRoutes)




var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server listening at port:", port)
})