// Requerindo oq vai ser usado
const express = require('express');
const router = express.Router();

// Requerindo módulos de outros .js
const idSessao = require('../public/scripts/scriptFilme');
const database = require('../models/db');
const { get } = require('../server');
const idFilme = require('../public/scripts/scriptProgramacao');

router.get('/', (req,res) => {
    res.redirect('/home');
});

// Rotas com SQL

router.get("/programacao", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "Paraná") {
        var filial = "Paraná";
    }
    else if (filialAlter == "Acre") {
        var filial = "Acre";
    }
    else{
        var filial = "Paraná";
    }
    db.query(`SELECT * FROM dbCinema.filme`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexProgramacao', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial
            });
        });  
    });
});

router.get("/em-cartaz", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "Paraná") {
        var filial = "Paraná";
    }
    else if (filialAlter == "Acre") {
        var filial = "Acre";
    }
    else{
        var filial = "Paraná";
    }
    db.query(`SELECT * FROM dbCinema.filme`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        res.render('indexEmCartaz', { 
            listaFilme: resultadoFilme,
            filialEscolhida: filial
        }); 
    });
});

router.get("/home", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "Paraná") {
        var filial = "Paraná";
    }
    else if (filialAlter == "Acre") {
        var filial = "Acre";
    }
    else{
        var filial = "Paraná";
    }
    db.query(`SELECT * FROM dbCinema.filme`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        res.render('indexPrincipal', { 
            listaFilme: resultadoFilme,
            filialEscolhida: filial
        }); 
    });
});

router.get("/homem-aranha", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "Paraná") {
        var filial = "Paraná";
    }
    else if (filialAlter == "Acre") {
        var filial = "Acre";
    }
    else{
        var filial = "Paraná";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="2"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="2"`, function(erro,resultadoSessao){
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
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "Paraná") {
        var filial = "Paraná";
    }
    else if (filialAlter == "Acre") {
        var filial = "Acre";
    }
    else{
        var filial = "Paraná";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="3"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="3"`, function(erro,resultadoSessao){
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

router.get("/ingresso/The%20Batman", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "Paraná") {
        var filial = "Paraná";
    }
    else if (filialAlter == "Acre") {
        var filial = "Acre";
    }
    else{
        var filial = "Paraná";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="3"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="3"`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial
            });
        });  
    });
});

router.get("/ingresso/Homem-Aranha:%20Sem%20Volta%20para%20Casa", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "Paraná") {
        var filial = "Paraná";
    }
    else if (filialAlter == "Acre") {
        var filial = "Acre";
    }
    else{
        var filial = "Paraná";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="2"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="2"`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial
            });
        });  
    });
});

router.get("/admin", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "Paraná") {
        var filial = "Paraná";
    }
    else if (filialAlter == "Acre") {
        var filial = "Acre";
    }
    else{
        var filial = "Paraná";
    }
    res.render('indexLogin', {
        filialEscolhida: filial
    });
});

//rota para trocar filial
router.post('/parana', function(req,res){
    localStorage.setItem('filialAlter', 'Paraná');
    res.redirect('back');
})

router.post('/acre', function(req,res){
    localStorage.setItem('filialAlter', 'Acre');
    res.redirect('back');
})

//rota para salvar os INSERT
router.post('/add', function(req,res){
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email) VALUES (?,?,?,?)`,
    [req.body.sessaoId, req.body.nome, req.body.cpf, req.body.email], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
        res.redirect('/programacao')
    });
});

//rota para o login do admin
router.post("/admin-logged", function(req,res){
    try{
        const user = req.body.user;
        const password = req.body.password;

        if(user == "admin" && password == "12345"){
            var filialAlter = localStorage.getItem('filialAlter');
            if (filialAlter == "Paraná") {
                var filial = "Paraná";
            }
            else if (filialAlter == "Acre") {
                var filial = "Acre";
            }
            else{
                var filial = "Paraná";
            }
            db.query(`SELECT * FROM dbCinema.funcionarios WHERE idFilial="1" ORDER BY salarioFuncionario`, function(erro,funcionarios){
                if(erro){
                    throw erro;
                }
                res.render('indexAdmin', { 
                    listaFuncionarios: funcionarios,
                    filialEscolhida: filial
                });
            });
        }
        else{
            res.render('failLogin', {
                name: 'fail',
                filialEscolhida: filial
            })
        }
    }
    catch (error) {
        res.status(400).send("Invalid user")
    }
})



module.exports ={
    router,
}