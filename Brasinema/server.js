//Arquivo para rodar o servidor

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const Post = require('./models/Post')

app.use(express.static(__dirname));

app.use(express.static("public"));


//Definindo para qual rota vão os html
app.get("/home", function(req,res){
    res.sendFile(__dirname + "/public/indexPrincipal.html")
})

app.get("/homem-aranha", function(req,res){
    res.sendFile(__dirname + "/public/indexFilme.html")
})

app.get("/ingresso", function(req,res){
    res.sendFile(__dirname + "/public/indexCompra.html")
})

app.get("/programacao", function(req,res){
    res.sendFile(__dirname + "/public/indexProgramacao.html")
})



//body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.post('/add', function(req, res){
    Post.create({
        sessaoId: req.body.sessaoId,
        nome: req.body.nome,
        cpf: req.body.cpf,
        email: req.body.email
    }).then(function(){
        res.redirect('/home')
    })
})




//Sempre deixar isso em baixo de tudo\\
app.listen(8081, function(){console.log("Servidor Rodando!");});
//Sempre deixar isso em baixo de tudo\\

