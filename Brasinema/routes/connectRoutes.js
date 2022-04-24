const express = require('express');
const router = express.Router();
const database = require('../models/db');
const { get } = require('../server');
const idFilme = require('../public/scripts/scriptProgramacao')

// Rotas sem SQL
router.get('/', (req,res) => {
    res.redirect('/home');
});

router.get("/home", function(req,res){
    res.render('indexPrincipal', {title: 'home'});
});

router.get("/em-cartaz", function(req,res){
    res.render('indexEmCartaz', {title: 'cartaz'});
});

// Rotas com SQL


router.get("/homem-aranha", function(req,res) {
    db.query('SELECT * FROM dbcinema.filme WHERE filmeId="2"', function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query('SELECT * FROM dbcinema.sessao WHERE filmeId="2"', function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexFilme', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao
            });
        });  
    });
});

router.get("/the-batman", function(req,res) {
    db.query('SELECT * FROM dbcinema.filme WHERE filmeId="3"', function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query('SELECT * FROM dbcinema.sessao WHERE filmeId="3"', function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexFilme', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao
            });
        });  
    });
});

router.get("/programacao", function(req,res) {
    db.query('SELECT * FROM dbcinema.filme', function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query('SELECT * FROM dbcinema.sessao', function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexProgramacao', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao
            });
        });  
    });
});

router.get("/ingresso", function(req,res) {
    db.query('SELECT * FROM dbcinema.filme', function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query('SELECT * FROM dbcinema.sessao', function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao
            });
        });  
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