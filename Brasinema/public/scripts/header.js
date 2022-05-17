function openModalHeader(){
    var modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

function closeModalHeader(){
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

function paranaClick(){
    localStorage.setItem("filialAlter", "Paraná");
    location.reload();
}

function acreClick(){
    localStorage.setItem("filialAlter", "Acre");
    location.reload();
}