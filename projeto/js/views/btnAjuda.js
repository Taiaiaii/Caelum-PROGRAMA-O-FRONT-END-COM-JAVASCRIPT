// 1 - Guardar a referência do botão de Ajuda da aplicação CEEP;
//     2 - Quando o botão
// for clicado, criaremos um Array contendo as seguintes mensagens: 
//"Bem-vindo(a) ao CEEP!"
// "Clique no botão '?' para Ajuda"
// "Clique no botão 'Linhas' para mudar a exibição dos cartões"
// 3 - Em seguida, percorremos a lista de mensagens criada no passo anterior;
// 4 - Por fim, exibimos cada uma das mensagens presentes na lista num pop - up(alert).


const btn = document.querySelector('#btnAjuda'); //1
btn.onclick = () => {
    let mensagens = ["Bem-vindo(a) ao CEEP!", "Clique no botão '?' para Ajuda", "Clique no botão 'Linhas' para mudar a exibição dos cartões"];


    for (let mensagem of mensagens) {
        alert(mensagem);
    }
};

        // COMENTÁRIO DE ESTUDO

// aqui capturamos o elemento na DOM que contem o id "#btnAjuda" - que no caso é o botao ajuda do site 
// apenas colocamos um evento handler nele para quando for clicado, usamos uma função callback do tipo arrow e nela criamos um
// array ao qual chamamos "mensagens" contendo tres tipos de mensagem.
// Em um estrutura do tipo for of, pedimos que percorresse o array disparando um alert para cada elemento.