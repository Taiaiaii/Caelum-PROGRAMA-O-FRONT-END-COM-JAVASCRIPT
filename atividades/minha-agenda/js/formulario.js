//logica de validação do formulário e coleta de dados

import {adicionarContato} from './tabela-contatos.js';

const formulario = document.querySelector('.row');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.querySelector("#inputNome");
    const telefone = document.querySelector("#inputTelefone");
    if (!nome.value.trim()) {
        alert(nome.dataset.msg);
    } else if (!telefone.value.trim()) {
        alert(telefone.dataset.msg);
    } else {
        adicionarContato(nome.value,telefone.value);
        formulario.reset();
    }

});

// aqui, primeiramente importamos a funçao "adicionarContato" que se encontra em outro arquivo. Criamos então a constante formulario para 
// receber a referencia do form que contem a classe "row" na dom. Adicionamos a constante um evento escutador de submit (lembrando que submit 
// acontece por padrão ao clicar um botao dentro de um form) e iniciamos a função callback. Adicionamos como primeira regra a função de prevenir 
// o comportamento padrao do evento, que é de recarregar a página ao clicar o botão. Posteriormente criamos uma constante "nome" e outra "telefone"
// para receberem respectivamente as referencias nos inputs na DOM destinados a nome e delefone. Abrimos uma estrutura do tipo if na qual se o valor do
// da variavel nome menos os espaços em branco (trim()) forem falsos criamos um alerta que busca a mensagem configurada no dataset da dom. Realizamos
// o mesmo procedimento para o campo telefone na DOM, na continuação da estrutura (else if). Para o caso contrato (else - se ambos tiverem valores 
// verdadeiros) chamamos a função adicionarContato com parametros do valor inputado no campo nome, e valor inputado no campo telefone. Por ultimo
// pedimos para resetar o formulário, para que depois de enviados os dados os campos ficarem novamente em branco. 