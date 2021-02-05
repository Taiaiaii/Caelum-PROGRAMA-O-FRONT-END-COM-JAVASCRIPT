import {adicionarCartao} from "./mural.js";

const btn = document.querySelector('#btnAjuda'); //1
btn.onclick = () => {
    let mensagens = ["Bem-vindo(a) ao CEEP!", "Clique no botão '?' para Ajuda", "Clique no botão 'Linhas' para mudar a exibição dos cartões"];


    for (let mensagem of mensagens) {
        adicionarCartao(mensagem);
    }
};

        // COMENTÁRIO DE ESTUDO

// aqui capturamos o elemento na DOM que contem o id "#btnAjuda" - que no caso é o botao de ajuda do site 
// apenas colocamos um evento handler nele para quando for clicado, usamos uma função callback do tipo arrow e nela criamos um
// array ao qual chamamos "mensagens" contendo tres tipos de mensagem.
// Em um estrutura do tipo for of, pedimos que percorresse o array disparando um alert para cada elemento. 

// --- Aula4:----
// o alert foi substituido pela funçao adicionarCartao recebendo como parametro "mensagem" que na estrutura for/of está setado como elemento  
// do array mensagens. Essa função está modularizada em outro arquivo, por isso precisamos na primeira linha importa-la
