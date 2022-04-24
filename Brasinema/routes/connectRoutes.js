const express = require('express');
const router = express.Router();
const database = require('../models/db');
const { get } = require('../server');
const idFilme = require('../public/scripts/scriptProgramacao')

// Definindo para qual rota vão os ejs
router.get('/', (req,res) => {
    res.redirect('/home');
});

router.get("/home", function(req,res){
    res.render('indexPrincipal', {title: 'home'});
});

router.get("/ingresso", function(req,res){
    res.render('indexCompra', {title: 'compra'});
});

router.get("/programacao", function(req,res){
    res.render('indexProgramacao', {title: 'programacao'});
});

router.get("/em-cartaz", function(req,res){
    res.render('indexEmCartaz', {title: 'cartaz'});
});

//teste sql

router.get("/homem-aranha", function(req,res) {
    db.query('SELECT * FROM dbcinema.filme WHERE filmeId="2"', function(erro,resultado){
        if(erro){
            throw erro;
        }
        if(!erro){
            res.render('indexFilme', { lista: resultado })  
        }
    });
});

router.get("/the-batman", function(req,res) {
    db.query('SELECT * FROM dbcinema.filme WHERE filmeId="3"', function(erro,resultado){
        if(erro){
            throw erro;
        }
        if(!erro){
            res.render('indexFilme', { lista: resultado })  
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