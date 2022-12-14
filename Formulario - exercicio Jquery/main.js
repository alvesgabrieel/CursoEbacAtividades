$('document').ready(function (){
    Masks()
    validarForm();

})

function Masks() {
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
}

function validarForm() {
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Digite o seu nome',
            email: 'Digite o seu email',
            telefone: 'Digite seu telefone',
            cep: 'Digite o seu cep'
        },
        submitHandler: function (form) {
            
        },
        invalidHandler: function(evento, validador) {
            let incorreto = validador.numberOfInvalids();
            if(incorreto) {
                alert(`Existe ${incorreto} campo(s) icorreto(s), por favor tente preencher todo(s) iten(s) obrigatórios`)
            }
        }
    })
}