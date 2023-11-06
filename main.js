$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#btn-cancelar').click(function(){
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em resolução original">
                    Ver imagem em tempo real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2900);
        $('#endereco-imagem-nova').val('')
    });
});
