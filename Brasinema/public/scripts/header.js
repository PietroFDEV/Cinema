let filial = "Paraná";

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
}

function acreClick(){
    filial = "Acre";
}

module.exports = filial;