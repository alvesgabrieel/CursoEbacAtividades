const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numeroA = parseInt(document.getElementById('campoA').value);
    const numeroB = parseInt(document.getElementById('campoB').value);
    const msgSucesso = 'Valores enviados com <b>sucesso<b/>!';
    const msgErro = 'Desculpe, o segundo valor <em>(Campo B)</em> precisa ser <b>maior</b> que o primeiro valor <em>(Campo A)</em>'

    if(numeroA < numeroB) {

        let containerMsg = document.querySelector('.msg-retorno');
        containerMsg.innerHTML = msgSucesso;
        containerMsg.style.display = 'block';

    } else {
        let containerMsg = document.querySelector('.msg-retorno');
        containerMsg.innerHTML = msgErro;
        containerMsg.style.display = 'block';
    }
})