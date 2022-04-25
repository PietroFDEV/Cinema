const idSessao = '';

function sessaoClick(){
    const idSessao = document.getElementById("sessionButton")[0].getAttribute("href");
    console.log(idSessao);
}

module.exports = idSessao;
global.idSessao = idSessao;