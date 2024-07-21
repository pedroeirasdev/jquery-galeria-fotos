$(document).ready(function(){ //$ = requisição direta com o jQuery, (document) = chama o documento HTMl
    $('header button').click(function() {
        $('form').slideDown(); //expandir formulário
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp(); //fechar formulário
    })

    $('form').on('submit', function(e) {
        e.preventDefault(); //previne que o site recarregue ao clicar no botão "Adicionar"
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#endereco-imagem-nova').val(''); //para limpar o campo url
    })
})

//querySelector = detetive pessoal
//addEventListener = carteiro pessoal, function depois de addEventListener = callback