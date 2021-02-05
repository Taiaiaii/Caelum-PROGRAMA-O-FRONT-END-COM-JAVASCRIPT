    import {toggleLayout} from './mural.js';


    const btn = document.querySelector('#btnMudaLayout');

    btn.addEventListener('click', function () {
        if (btn.textContent.trim() == 'Linhas') {
            btn.textContent = 'Blocos';

        } else {
            btn.textContent = 'Linhas';
        }

        toggleLayout();

    });




// importamos a função toggleLayout (que tem como função retirar e colocar determinada classe que dá uma determinada aparencia ao layout)
// criamos entao uma constante que recebe a referencia de um botão na dom com id btnMudaLayout. Adicionamos a constante entao, um evendo escutador 
// de click e em sua função callback abrimos uma estutura de repetiçao do tipo if que verifica se o conteudo textual do botao menos os espaços vazios 
// é igual a string "linha". se for, dizemos para troca-lo por "bloco". Do contrario, caso seja bloco, ao ser clicado mudará novamente para "linha". 
// Ao fechar a estrutura chamamos a função para que seja também trocada a classe. O objetivo aqui é que a cada click o nome do botão seja alterado  
// bem como seu layout.