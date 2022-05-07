const idSessao = '';

function sessaoClick(){
    //const idSessao = document.getElementById("sessionButton")[0].getAttribute("href");
    const sessao = document.getElementsByClassName('pescondido');
    const idSessao = $(sessao).attr('href');
    console.log(idSessao);

}

module.exports = idSessao;
global.idSessao = idSessao;