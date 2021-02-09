const mural = document.querySelector('.mural'); //função para trocar layout no click do botão linha
const template = document.querySelector('#template-cartao');
let numeroCartao = 0;
//1) adicionar cartão atraves do template html
export function adicionarCartao(conteudo, cor ='') {
    numeroCartao++;
    const cartao = template.content.firstElementChild.cloneNode(true); //gerando um obj igual mas com valor na memo diferente
    cartao.style.backgroundColor = cor;
    cartao.innerHTML = cartao.innerHTML.replaceAll('{{NUMERO_DO_CARTAO}}', numeroCartao).replace('{{CONTEUDO_CARTAO}}', conteudo);
    mural.append(cartao);
}

//2) trocar a disposição do layout ao clicar o botao linha/bloco
export function toggleLayout() {
    mural.classList.toggle('mural--linha');
}

// 3) botao excluir dos cartoes
mural.addEventListener('click', function (event) {
    let isBotaoExcluir = event.target.classList.contains('opcoesDoCartao-remove');
    if (isBotaoExcluir) {
        const cartao = event.target.closest('.cartao');
        cartao.classList.add('cartao--some'); // faz um fade para que ao remover ele antes faça o fade dando uma suavizada na remoção
        cartao.ontransitionend = () => cartao.remove();
    }
});

// 4) trocar a cor do cartao de acordo com a seleção
mural.addEventListener('change', function (event) {
    let isRadio = event.target.type == 'radio';
    if (isRadio) {
        const cor = event.target.value;
        const cartao = event.target.closest('.cartao');
        cartao.style.backgroundColor = cor;
    }
});
//5) fazer com que a cor possa ser setada através do teclado
mural.addEventListener('keypress', function (event) {
    let isLabel = event.target.tagName === 'LABEL';
    if (isLabel && (event.key == 'Enter' || event.key == ' ')) {
        event.target.click(); // forço um click pra puxar o evento change
    }
});

// temos aqui antes de mais nada a constante que manipulara o mural do site. Ela referencia o obj na dom que contem a classe mural. Temos em seguida a  
// constante template. Esta referencia o elemento na dom contendo a classe template-cartao. Elementos do tipo template no html não são lidos diretamente
// pelo brownser. Servem como um modelo para que sejam adicionados via JS. Assim SENDO podem conter algumas variáveis, elementos que serão diferentes
// // cada vez que um novo for criado . Neste caso temos já de inicio o numero do cartão, que faz parte do name atribuido ao imput do template. No html  
// ele aparece como {{NUMERO_DO_CARTÃO}}. Criamos então uma variavel chamada numeroCartao e setamos um valor inicial de zero a ela. 

// 1) - Criamos então uma função que pode ser exportada, chamada adicionarCartao que leva como parametro o conteúdo. Antes de mais nada, dizemos na função  
// que a variavel numeroCartao deve ser incrementada a cada iteração. Criamos entao uma constante cartao e essa pede que seja clonado o primeiro filho de
// template, que é justamente o article modelo que queremos criar. Usamos entao a propriedade innerHTML. Dizemos que a constante cartao somada a essa  
// propriedade deve referenciar uma substituição total dos campos numero do cartão, a ser trocada pela variavel numeroCartao, e {{conteudo do cartao}}  
// deve ser substituido por conteúdo, a ser setado quando chamamos a função.

// 2 ) Criamos outra função exposrtavel, chamada toggleLayout. Essa tem como responsabilidade apenas usar a propriedade toggle de class list no mural,  
// tirando se houve, e colocando se nao houver a classe mural--linha, quando a função for chamada. 

// 3 )temos neste documento ainda a adição de um evento escutador de click ao mural. Dizemos na função que quando o alvo do evento contiver a classe  
// opcoesDoCartao-remove, a variavel is botao é verdadeira. Com o if pedimos que, quando essa variavel for verdadeira  a cosntante cartao  referencie 
// o elemento mais proximo ao alvo que cotenha a classe cartao.Adicionamos a constante entao uma classe responsável por realizar um fade          
// suave e dizemos que quando estiver nessa transição execute uma função na qual a constante cartao é adicionada a função remove.closest

// 4) - aqui adicionamos a mudal um evento escutador de mudanças. em sua função callback dizemos que a variavel isRadio é verdadeira quando o alvo do
//  evento tiver tipo "radio" (tipo descriminado no input no html). Então pedimos que se for verdadeiro is radio, que a constante cor receba a referencia  
//  do valor do value do evento. Lembrando que o alvo do evento foi um dos inputs, em cada input do tipo radio html há um valor de cor css setado.
//  pedimos que a constante cartão referencie o elemento mais proximo do alvo que contenha a classe cartao, que no caso é todo o article.  
//  Assim pedimos que cartao tenha como estilo a cor de fundo recebendo a constante cor, de forma que o article vai ficar com a mesma cor do input radio.

// 5) aqui adicionamos um evento escutador de tecla do teclado apertada. Dizemos que a variavel isLabel referencia o caso em que o alvo do evento  
// tem como nome de tag LABEL. entao no if pedimos que para quando essa variavel for verdadeira e o alvo do evento for a tecla enter, ou o alvo do  
// evento for a tecla espaço seja forçado um click no alvo do evento.


//aula 5, colocou parametro cor na função adicionarCartão e linha que manda por cor de fundo no cartão igual do parametro