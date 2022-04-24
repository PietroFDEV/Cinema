const express = require('express');
const router = express.Router();
const database = require('../models/db');
const { get } = require('../server');

// Definindo para qual rota vão os ejs
router.get('/', (req,res) => {
    res.redirect('/home');
});

router.get("/home", function(req,res){
    res.render('indexPrincipal', {title: 'home'});
});

router.get("/spiderman", function(req,res){
    res.render('indexSpiderman', {title: 'spiderman'});
});

router.get("/ingresso", function(req,res){
    res.render('indexCompra', {title: 'compra'});
});

router.get("/programacao", function(req,res){
    res.render('indexProgramacao', {title: 'programacao'});
});

router.get("/batman", function(req,res){
    res.render('indexBatman', {title: 'batman'});
});

router.get("/em-cartaz", function(req,res){
    res.render('indexEmCartaz', {title: 'cartaz'});
});

//teste sql
router.get("/filme", function(req,res) {
    db.query('SELECT * FROM dbcinema.filme', function(erro,resultado){
        if(erro){
            throw erro;
        }
        if(!erro){
            res.render('lista', { lista: resultado })  
        }
    });
});

//rota para salvar os INSERT
router.post('/add', function(req,res){
    db.query('INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email) VALUES (?,?,?,?)',
    [req.body.sessaoId, req.body.nome, req.body.cpf, req.body.email], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
        res.redirect('/ingresso')
    });
});



module.exports = router;