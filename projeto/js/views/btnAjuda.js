import {
    adicionarCartao
} from "./mural.js";

const btn = document.querySelector('#btnAjuda'); //1
btn.addEventListener('click', async () => {
            const resposta = await fetch('http://wd47-ceep.herokuapp.com/get-instrucoes.php ');
            const dadosCarregados = await resposta.json(); //converter para objeto
            // console.log(dadosCarregados);

            let mensagens = dadosCarregados.instrucoes;


            for (let mensagem of mensagens) {
                adicionarCartao(mensagem.conteudo, mensagem.cor);
            }
});

        // COMENTÁRIO DE ESTUDO

        // aqui capturamos o elemento na DOM que contem o id "#btnAjuda" - que no caso é o botao de ajuda do site 
        // apenas colocamos um evento handler nele para quando for clicado, usamos uma função callback do tipo arrow e nela criamos um
        // array ao qual chamamos "mensagens" contendo tres tipos de mensagem.
        // Em um estrutura do tipo for of, pedimos que percorresse o array disparando um alert para cada elemento. 

        // --- Aula4:----
        // o alert foi substituido pela funçao adicionarCartao recebendo como parametro "mensagem" que na estrutura for/of está setado como elemento  
        // do array mensagens. Essa função está modularizada em outro arquivo, por isso precisamos na primeira linha importa-la

        //aula 5
        // tirando as mensagens escritas do array e colocando por ajax