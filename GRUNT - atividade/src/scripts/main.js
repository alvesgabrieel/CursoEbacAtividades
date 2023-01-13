document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('btn').addEventListener('click', function(evento){
        evento.preventDefault();
        document.querySelector('.msg').style.display = 'flex';
    })
})