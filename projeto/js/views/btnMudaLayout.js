// 1 - Guardar a referência do botão de mudança de layout;
//     2 - Ao ser clicado, precisaremos checar o texto do botão;
//     SE o texto
// for "Linhas"
// trocaremos para "Blocos", CASO CONTRÁRIO vice - versa;
// 3 - Também, ao ser clicado, precisaremos adicionar / remover a classe "mural--linha"
// ao elemento com classe "mural"
// na DOM;
// quando adicionada, essa classe faz com que os cartões sejam exibidos um em cada linha, quando removida, os cartões são exibidos um ao lado do outro(padrão).

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




