const express = require('express');
const router = express.Router();

//retorna todos os produtos
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os produtos'
    });
});

//insere um produto
router.post('/', (req, res, next) => {
    const produto = {
        nome:req.body.nome,
        preco: req.body.preco
    }
    res.status(201).send({
        mensagem: 'Insere um produto',
        produtoCriado: produto
    });
});

//retorna os dados de um produto
router.get('/:id', (req, res, next) => {
    const id = req.params.id_produto
    if (id === 'especial'){
        res.status(200).send({
            mensagem: 'Produto especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Você passou um ID'
        });
    }
    
});

//altera um produto
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Produto alterado'
    });
});

//exclui um produto
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Produto excluido'
    });
});

module.exports = router;