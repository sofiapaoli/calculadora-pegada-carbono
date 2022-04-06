function irParaProxima(item) {
    var div = $(item).closest('.div-pergunta');
    div.fadeOut(function () {
        div.next().fadeIn()
    });
}

function irParaAnterior(item) {
    var div = $(item).closest('.div-pergunta');
    div.fadeOut(function () {
        div.prev().fadeIn()
    });
}

function irParaPergunta(numero) {
    $('.div-pergunta').hide() 
    $('#div-pergunta-' + numero).show()
}

function finalizarCalculo() {

    // Pergunta 1
    var pessoas = $('#input-pergunta-1').val();
    $('#resultado-limpo-1').html("X.XX");
    $('#resultado-sujo-1').html("X.XX");

    // Pergunta 2 
    var eletricidade = $('#input-pergunta-2').val();
    $('#resultado-limpo-2').html("X.XX");
    $('#resultado-sujo-2').html((0.90286575 + 0.00089881 * eletricidade).toFixed(3));

    // Pergunta 3 
    var gas = $('#input-pergunta-3').val();
    $('#resultado-limpo-3').html("X.XX");
    $('#resultado-sujo-3').html((1.03610667+ 0.00808571 * gas).toFixed(3));

    // Pergunta 4 
    var residuos = $('#input-pergunta-4').val();
    $('#resultado-limpo-4').html("X.XX");
    $('#resultado-sujo-4').html("X.XX");

    // Pergunta 5
    var transporteIndividual = $('#input-pergunta-5').val();
    $('#resultado-limpo-5').html("X.XX");
    $('#resultado-sujo-5').html("X.XX");

    // Pergunta 6 
    var transporteColetivo = $('#input-pergunta-6').val();
    $('#resultado-limpo-6').html("X.XX");
    $('#resultado-sujo-6').html((1.03610667+ 0.00808571 * transporteColetivo).toFixed(3));

    // Pergunta 7
    var carne = $('#input-pergunta-7').val();
    $('#resultado-limpo-7').html("X.XX");
    $('#resultado-sujo-7').html("X.XX");

    // Diferença
    $('#diferenca').html('X.XXX')

    UIkit.modal("#modal-resultados").show();
}

UIkit.util.ready(function () {

    var bar = document.getElementById('js-progressbar');

    var animate = setInterval(function () {
        if ( $('#div-pergunta-' + numero) >=  $('#div-pergunta-')){
        bar.value += 10;
        }
        if (bar.value >= bar.max) {
            clearInterval(animate);
        }

    }, 1000);

});