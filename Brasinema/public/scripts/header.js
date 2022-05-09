var city = document.getElementById('city').innerHTML;

if (city == "undefined"){
    
}

let filialA = require('../../models/db');
let filial = filialA.filial;

function openModalHeader(){
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModalHeader(){
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function paranaClick(){
    filial = "Paraná";
    location.reload();
}

function acreClick(){
    filial = "Acre";
    location.reload();
}

//module.exports = filial;