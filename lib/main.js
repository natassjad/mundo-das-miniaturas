$(document).ready(function () {
    $('form').validate ({
        rules: {
            name: {
                required:true
            },
            email: {
                required: true
            },
            telefone: {
                required:false
            },
            mensagem: {
                required:true
            }
        },
        submitHandler: function (form) {
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos);
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })
    $('#telefone').mask(('(00) 00000-0000'), {
        placeholder: '(00) 00000-0000'
    })
})git c