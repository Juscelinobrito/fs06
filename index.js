//importando o express pra substituir a necessidade do "http"

//const express = require('express');
//const app = express();
//app.use(express.json());

const app = require('express')();

app.use(require('express').json());

const porta = '8000';

// importar cada router que foi criado
const veiculoRouter = require('./src/router/veiculoRouter');

// para habilitar as novas rotas
app.use('/', veiculoRouter);

app.listen(porta, () => {
    console.log('API rodando no endereço http://localhost:8000')
});
