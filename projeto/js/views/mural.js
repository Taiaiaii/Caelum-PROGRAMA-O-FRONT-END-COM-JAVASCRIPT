const mural = document.querySelector('.mural'); //função para trocar layout no click do botão linha

export function toggleLayout() {
    mural.classList.toggle('mural--linha');
}
//exclusao do cartão
// 1) Adicionar um evento click ao mural;
// 2) Verificar se quem foi clicado dentro do mural foi o botão de exclusão do cartão(que tem a classe opcoesDoCartao - remove);
//     3)
// Em caso positivo, a partir do botão de remoção clicado, iremos navegar na DOM até o elemento cartão(article) que seja o ancestral mais próximo;
// 4) Uma vez encontrado o article correspondente ao cartão, iremos excluir o elemento.

mural.addEventListener('click', function (event) {
    let isBotaoExcluir = event.target.classList.contains('opcoesDoCartao-remove');
    if (isBotaoExcluir) {
        const cartao = event.target.closest('.cartao');
        cartao.classList.add('cartao--some'); // faz um fade para que ao remover ele antes faça o fade dando uma suavizada na remoção
        cartao.ontransitionend = () => cartao.remove();
    }
});

//mudança de cor:

// 1) Adicionaremos o evento change ao mural.Esse evento é disparado quando uma mudança de valor em determinados campos de formulário(em especial checkbox, radio e select).No caso, quando clicamos sobre as "bolinhas", alteramos os valores dos elementos radio associados a elas, por isso o evento é disparado;
// 2) Monitoramos se quem disparou o evento foi um elemento do tipo radio, checando a propriedade type do alvo do evento(event.target);
// 3)
// Se sim, guardamos a referência do cartão que seja ancestral ao radio que foi clicado;
// 4) Por fim, aplicamos, como cor de fundo do cartão, o valor guardado no elemento radio(os radio da página guardam como valor um hexadecimal referente a uma cor a ser aplicada ao cartão).

mural.addEventListener('change', function (event) {
    let isRadio = event.target.type == 'radio';
    if (isRadio) {
        const cor = event.target.value;
        const cartao = event.target.closest('.cartao');
        cartao.style.backgroundColor = cor;
    }
});

// mudança de cor via teclado
mural.addEventListener('keypress', function (event) {
    let isLabel = event.target.tagName === 'LABEL';
    if (isLabel && (event.key == 'Enter' || event.key == ' ')) {
        event.target.click(); // forço um click pra puxar o evento change
    }
});