//exportando modulos
const express = require('express');
const app = express();
const morgan = require('morgan')

//exportando as rotas
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

//estabelecendo uso de logs
app.use(morgan('dev'));

//Body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//CORS
app.use((req, res, next) => {
    res.header('Aceces-Control-Allow-Origin', '*');
    res.header('Aceces-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req === 'OPTIONS'){
        res.header('Acess-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
})

//estabelecendo uso das rotas
app.use('/produtos', rotaProdutos);
app.use('/pedidos', rotaPedidos);

//Quando não encontra rota
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.mensagem
        }
    });
});

module.exports = app;