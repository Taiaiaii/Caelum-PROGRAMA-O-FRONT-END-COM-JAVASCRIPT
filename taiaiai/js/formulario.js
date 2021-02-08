import {adicionarAcordeao} from './adicionar-acordeao.js';
import {animaAcordeao} from './anima-acordeao.js';
import {salvarDados} from './dados.js'

const formulario = document.querySelector('.formulario');
const msg = document.createElement('div');
msg.classList.add('formNovoCartao-msg');
const nome = document.querySelector('.campo-nome');
const titulo = document.querySelector('.campo-titulo');
const mensagem = document.querySelector('.campo-msg');



formulario.addEventListener('submit', function(event) {
   event.preventDefault();

   let campos = document.querySelectorAll('.campo');
   let mensagensErro = [];

   for (let campo of campos) {
       if (!campo.value) {
           mensagensErro.push(campo.dataset.mensagem);
       }
   }

   if (mensagensErro.length > 0) {
       msg.innerHTML = `${mensagensErro.join('<br>')}`;
   } else {
       adicionarAcordeao(nome.value, titulo.value, mensagem.value);
       formulario.reset();
       animaAcordeao();
       


   }

   
  formulario.insertAdjacentElement('beforebegin', msg);
 


});
