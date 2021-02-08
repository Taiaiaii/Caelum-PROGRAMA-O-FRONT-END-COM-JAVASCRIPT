//validação de form
import {adicionarCartao} from "./mural.js";
import {notificar} from "./notificacao.js";



const formulario = document.querySelector('form');
const campoTexto = formulario.querySelector('textarea');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!campoTexto.value.trim()) {
        notificar('Por favor, preencha o campo corretamente!');
    }
    else {
        adicionarCartao(campoTexto.value.trim());
        formulario.reset();
    }



});

// comentário de estudo:

// criamos a constante formulário para receber da DOM o form, e a constante campoTexto para reverenciar a text area 
// adicionamos a formulário um evento escutador para perceber o submit (padrão de botao enviar em formularios) e criamos a função callback 
// a primeira coisa dentro da função e adicionar ao evento a propriedade que previne o comportamento padrão (recarregar a pagina ao dar o submit)
// então dissemos que se o valor do campotexto menos os seus espaços vazios (trim) for um bolean falso, criamos uma div, 
//atribuimos a ela umaclasse especifica e um texto. colocamos a div dentro do formulário com a função append.

// a partir da aula4 essa logica da criação da div foi para o documento notificação, onde tornou-se uma função que pode ser exportada. Assim a 
// importamos no inicio do documento e chamamos ela em casos em que o campo não estiver preenchido, com parametro uma mensagem. No caso contrario
// se  campoTexto.value.trim() estiver preenchido chamamos outra função, essa importada do documento mural, "adicionar cartao" setando como parametro  
// justamente o valor do campo menos os espaços finais e iniciais, de forma que sera criado um novo cartao com o conteudo que o usuario preencheu.
// damos entao um resert no formulario para qeu depois de criado o cartão ele fique novamente em branco !

