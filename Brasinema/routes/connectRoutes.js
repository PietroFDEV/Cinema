// Requerindo oq vai ser usado
const express = require('express');
const router = express.Router();

// Requerindo módulos de outros .js
const database = require('../models/db');  //banco de dados
const { get } = require('../server'); 


//rota pra redirecionar pra home
router.get('/', (req,res) => {
    res.redirect('/home');
});

// Rotas com SQL

router.get("/compra-efetuada", function(req,res){
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    res.render('success', { 
        filialEscolhida: filial
    });
})

router.get("/programacao", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {                  // if pra ver qual filial está selecionada
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme`, function(erro,resultadoFilme){  // selecionando dados da table filme
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao`, function(erro,resultadoSessao){  // selecionando dados da table sessão
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
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
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
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme LIMIT 4`, function(erro,resultadoFilme){
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
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="2"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="2" AND idFilial="`+filialN+`"`, function(erro,resultadoSessao){
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
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="3"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="3" AND idFilial="`+filialN+`"`, function(erro,resultadoSessao){
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

router.get("/doutor-estranho", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="4"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="4" AND idFilial="`+filialN+`"`, function(erro,resultadoSessao){
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

router.get("/jujutsu-kaisen", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="5"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="5" AND idFilial="`+filialN+`"`, function(erro,resultadoSessao){
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

router.get("/a-medium", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="6"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="6" AND idFilial="`+filialN+`"`, function(erro,resultadoSessao){
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

router.get("/sonic", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="7"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="7" AND idFilial="`+filialN+`"`, function(erro,resultadoSessao){
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
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="3"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="3" AND idFilial="`+filialN+`"`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial,
                filialEscolhidaN: filialN
            });
        });  
    });
});

router.get("/ingresso/Homem-Aranha:%20Sem%20Volta%20para%20Casa", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="2"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="2" AND idFilial="`+filialN+`"`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial,
                filialEscolhidaN: filialN
            });
        });  
    });
});

router.get("/ingresso/Doutor%20Estranho%20no%20Multiverso%20da%20Loucura", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="4"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="4" AND idFilial="`+filialN+`"`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial,
                filialEscolhidaN: filialN
            });
        });  
    });
});

router.get("/ingresso/Jujutsu%20Kaisen%200:%20O%20Filme", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="5"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="5" AND idFilial="`+filialN+`"`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial,
                filialEscolhidaN: filialN
            });
        });  
    });
});

router.get("/ingresso/A%20Medium", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="6"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="6" AND idFilial="`+filialN+`"`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial,
                filialEscolhidaN: filialN
            });
        });  
    });
});

router.get("/ingresso/Sonic%202%20-%20O%20Filme", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    db.query(`SELECT * FROM dbCinema.filme WHERE filmeId="7"`, function(erro,resultadoFilme){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.sessao WHERE filmeId="7" AND idFilial="`+filialN+`"`, function(erro,resultadoSessao){
            if(erro){
                throw erro;
            }
            res.render('indexCompra', { 
                listaFilme: resultadoFilme,
                listaSessao: resultadoSessao,
                filialEscolhida: filial,
                filialEscolhidaN: filialN
            });
        });  
    });
});

router.get("/admin", function(req,res) {
    var filialAlter = localStorage.getItem('filialAlter');
    if (filialAlter == "1") {
        var filial = "Paraná";
        var filialN = "1";
    }
    else if (filialAlter == "2") {
        var filial = "São Paulo";
        var filialN = "2";
    }
    else{
        var filial = "Paraná";
        var filialN = "1";
    }
    res.render('indexLogin', {
        filialEscolhida: filial,
    });
});



//rota para trocar filial
router.post('/pr', function(req,res){
    localStorage.setItem('filialAlter', '1');
    res.redirect('back');
})

router.post('/sp', function(req,res){
    localStorage.setItem('filialAlter', '2');
    res.redirect('back');
})

//rota para salvar os INSERT
router.post('/add1', function(req,res){
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId, req.body.nome, req.body.cpf, req.body.email, req.body.idFilial], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
        res.redirect('/compra-efetuada');
    });
});

router.post('/add2', function(req,res){
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId, req.body.nome, req.body.cpf, req.body.email, req.body.idFilial], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId2, req.body.nome2, req.body.cpf2, req.body.email2, req.body.idFilial2], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
        res.redirect('/compra-efetuada');
    });
});

router.post('/add3', function(req,res){
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId, req.body.nome, req.body.cpf, req.body.email, req.body.idFilial], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId2, req.body.nome2, req.body.cpf2, req.body.email2, req.body.idFilial2], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId3, req.body.nome3, req.body.cpf3, req.body.email3, req.body.idFilial3], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    res.redirect('/compra-efetuada');
});

router.post('/add4', function(req,res){
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId, req.body.nome, req.body.cpf, req.body.email, req.body.idFilial], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId2, req.body.nome2, req.body.cpf2, req.body.email2, req.body.idFilial2], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId3, req.body.nome3, req.body.cpf3, req.body.email3, req.body.idFilial3], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId4, req.body.nome4, req.body.cpf4, req.body.email4, req.body.idFilial4], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    res.redirect('/compra-efetuada');
});

router.post('/add5', function(req,res){
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId, req.body.nome, req.body.cpf, req.body.email, req.body.idFilial], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId2, req.body.nome2, req.body.cpf2, req.body.email2, req.body.idFilial2], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId3, req.body.nome3, req.body.cpf3, req.body.email3, req.body.idFilial3], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId4, req.body.nome4, req.body.cpf4, req.body.email4, req.body.idFilial4], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    db.query(`INSERT INTO dbcinema.ingressos(sessaoId,nome,cpf,email,idFilial) VALUES (?,?,?,?,?)`,
    [req.body.sessaoId5, req.body.nome5, req.body.cpf5, req.body.email5, req.body.idFilial5], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });
    res.redirect('/compra-efetuada');
});

//rota para o login do admin
router.post("/admin-logged", function(req,res){
    try{
        const user = req.body.user;
        const password = req.body.password;

        var filialAlter = localStorage.getItem('filialAlter');
        if (filialAlter == "1") {
            var filial = "Paraná";
        }
        else if (filialAlter == "2") {
            var filial = "São Paulo";
        }
        else{
            var filial = "Paraná";
        }

        if(user == "admin" && password == "12345"){
            db.query(`SELECT * FROM dbCinema.funcionarios ORDER BY salarioFuncionario`, function(erro,funcionarios){
                if(erro){
                    throw erro;
                }
                db.query(`SELECT * FROM dbCinema.ingressos ORDER BY IngressoId`, function(erro,ingressos){
                    if(erro){
                        throw erro;
                    }
                    res.render('indexAdmin', { 
                        listaFuncionarios: funcionarios,
                        listaIngressos: ingressos
                    });
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

//rotas para controle do admin
router.post("/admin-loggedM", function(req,res){
    const idFunc = req.body.buttonDelete;

    db.query(`DELETE FROM dbCinema.funcionarios WHERE idFuncionario="`+idFunc+`"`)

    db.query(`SELECT * FROM dbCinema.funcionarios ORDER BY salarioFuncionario`, function(erro,funcionarios){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.ingressos ORDER BY IngressoId`, function(erro,ingressos){
            if(erro){
                throw erro;
            }
            res.render('indexAdmin', { 
                listaFuncionarios: funcionarios,
                listaIngressos: ingressos
            });
        });
    });
})

router.post("/admin-loggedP", function(req,res){
    db.query(`INSERT INTO dbCinema.funcionarios(nomeFuncionario,cpfFuncionario,cargoFuncionario,salarioFuncionario,mesContratoAtivo,idFilial) VALUES (?,?,?,?,?,?)`,
    [req.body.nomeFunc, req.body.cpfFunc, req.body.funcaoFunc, req.body.salarioFunc, req.body.dataFunc, req.body.filialFunc], function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });

    db.query(`SELECT * FROM dbCinema.funcionarios ORDER BY salarioFuncionario`, function(erro,funcionarios){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.ingressos ORDER BY IngressoId`, function(erro,ingressos){
            if(erro){
                throw erro;
            }
            res.render('indexAdmin', { 
                listaFuncionarios: funcionarios,
                listaIngressos: ingressos
            });
        });
    });
})

router.post("/admin-loggedE", function(req,res){
    var id = req.body.idFunc;
    var nome = req.body.nomeFunc;
    var cpf = req.body.cpfFunc;
    var funcao = req.body.funcaoFunc;
    var salario = req.body.salarioFunc;
    var data = req.body.dataFunc;
    var filial = req.body.filialFunc; 
    db.query(`UPDATE dbCinema.funcionarios 
        SET nomeFuncionario = "`+nome+`", 
        cpfFuncionario = "`+cpf+`", 
        cargoFuncionario = "`+funcao+`", 
        salarioFuncionario = "`+salario+`", 
        mesContratoAtivo = "`+data+`", 
        idFilial = "`+filial+`"
        WHERE idFuncionario = "`+id+`"`,function(erro){
        if(erro){
            res.status(200).send('Erro: ' + erro)
        }
    });

    db.query(`SELECT * FROM dbCinema.funcionarios ORDER BY salarioFuncionario`, function(erro,funcionarios){
        if(erro){
            throw erro;
        }
        db.query(`SELECT * FROM dbCinema.ingressos ORDER BY IngressoId`, function(erro,ingressos){
            if(erro){
                throw erro;
            }
            res.render('indexAdmin', { 
                listaFuncionarios: funcionarios,
                listaIngressos: ingressos
            });
        });
    });
});


module.exports ={
    router,
}