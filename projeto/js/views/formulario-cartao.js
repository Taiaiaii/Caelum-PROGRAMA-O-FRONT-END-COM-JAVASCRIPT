//validação de form
import {adicionarCartao} from "./mural.js";
import {notificar} from "./notificacao.js";

// 1) Guardarmos a referência do formulário e do campo de texto presentes na página;
// 2) Adicionarmos um evento "submit"
// ao formulário;
// 3) Impedirmos o recarregamento da página quando o formulário
// for submetido;
// 4) Verificamos se o campo de texto está vazio, e caso esteja, criamos uma div em memória que será usada para exibir a mensagem de erro para o usuário;
// 5) Adicionamos a esta div virtual uma classe chamada "formNovoCartao-msg"
// e Como conteúdo textual da div criada, colocamos a mensagem 'Por favor, preencha o campo corretamente!';
// 6) Inserimos a div na DOM como último elemento filho do formulário;
// 7) Por fim, adicionamos o evento "animationend"
// à div criada.Como a classe "formNovoCartao-msg"
// tem uma animação CSS associada a ela(com efeito de entrada e de saída), para removermos a mensagem de erro na tela, precisamos esperar a animação terminar.Quem nos permite saber quando ela termina é o evento "animationend".



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

// criamos a constante formulário para receber da DOM o form, e a constante campoTexto para receber a text area 
// adicionamos a formulário um evento escutador para perceber o submit (padrão de botao enviar em formulario) e criamos a função callback 
// a primeira coisa dentro da função e adicionar ao evento a propriedade que previne o comportamento padrão (recarregar a pagina ao dar o submit)
// então dissemos que se o valor do campotexto menos os seus espaços vazios (trim) for um bolean falso, criamos uma div, atribuimos a ela umaclasse especifica
// e um texto.
// colocamos a div dentro do formulário com a função append.

// depois apenas colocamos um escutador na div, para que quando ela for animada a div seja removida, para que não se acumulem divs de mensagem na pagina

// a logica foi para o document notificacao.js - aula4