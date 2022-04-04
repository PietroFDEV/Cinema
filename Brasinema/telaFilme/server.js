const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendFile(__dirname + "/public/indexFilme.html")
})

app.listen(8081, function(){console.log("Servidor Rodando!");});

