let filialAlter;

function openModalHeader(){
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModalHeader(){
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function paranaClick(){
    filialAlter = "Paraná";
    location.reload();
}

function acreClick(){
    filialAlter = "Acre";
    location.reload();
}

module.exports = filialAlter;