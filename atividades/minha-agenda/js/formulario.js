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
        adicionarContato(nome,telefone);
        formulario.reset();
    }

});