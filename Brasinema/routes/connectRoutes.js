// Requerindo oq vai ser usado
const express = require('express');
const router = express.Router();

// Requerindo módulos de outros .js
const idSessao = require('../public/scripts/scriptFilme');
const database = require('../models/db');
const { get } = require('../server');
const idFilme = require('../public/scripts/scriptProgramacao');
let filialA = require('../models/db');
let filial = filialA.filial;

// Rotas sem SQL
router.get('/', (req,res) => {
    res.redirect('/home');
});

router.get("/home", function(req,res){
    res.render('indexPrincipal', {title: 'home'});
});

router.get("/em-cartaz", function(req,res){
    res.render('indexEmCartaz', {titleTeste: 'cartaz'});
});

router.get("/programacao", function(req,res){
    res.render('indexProgramacao', {title: 'cartaz'});
});


// Rotas com SQL
// router.get("/em-cartaz", function(req,res) {
//     db.query(`SELECT * FROM ${database.databaseFilial}.filme WHERE filmeId="2"`, function(erro,resultadoFilme){
//         if(erro){
//             throw erro;
//         }
//         db.query(`SELECT * FROM ${database.databaseFilial}.sessao WHERE filmeId="2"`, function(erro,resultadoSessao){
//             if(erro){
//                 throw erro;
//             }
//             res.render('indexEmCartaz', {titleTeste: 'cartaz'});
//         });  
//     });
// });

router.get("/homem-aranha", function(req,res) {
    db.query(`SELECT * FROM ${database.databaseFilial}.filme WHERE filmeId="2"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM ${database.databaseFilial}.sessao WHERE filmeId="2"`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexFilme', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial
            });
        });  
    });
});

router.get("/the-batman", function(req,res) {
    db.query(`SELECT * FROM ${database.databaseFilial}.filme WHERE filmeId="3"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM ${database.databaseFilial}.sessao WHERE filmeId="3"`, function(erro,resultadoSessao){
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

router.get("/ingresso/The%20Batman", function(req,res) {
    db.query(`SELECT * FROM ${database.databaseFilial}.filme WHERE filmeId="3"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM ${database.databaseFilial}.sessao WHERE filmeId="3"`, function(erro,resultadoSessao){
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

router.get("/ingresso/Homem-Aranha:%20Sem%20Volta%20para%20Casa", function(req,res) {
    db.query(`SELECT * FROM ${database.databaseFilial}.filme WHERE filmeId="2"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM ${database.databaseFilial}.sessao WHERE filmeId="2"`, function(erro,resultadoSessao){
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
    db.query(`INSERT INTO ${database.databaseFilial}.ingressos(sessaoId,nome,cpf,email) VALUES (?,?,?,?)`,
    [req.body.sessaoId, req.body.nome, req.body.cpf, req.body.email], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
        res.redirect('/programacao')
    });
});



module.exports = router;