import {salvarCartoesStore} from '../storage/db.js'
import {salvarCartoes} from '../server/sync.js';
import {getCartoes} from './mural.js';
import {notificar} from './notificacao.js';

const btnSync = document.querySelector('#btnSync');

btnSync.addEventListener('click', async function(){
    btnSync.disabled = true;
    btnSync.classList.replace('botaoSync--sincronizado', 'botaoSync--esperando');

    let mensagem = '';
    const listaDeCartoes = getCartoes();
   
   try {
       //tenta salvar cartoes no servidor
        mensagem = await salvarCartoes(listaDeCartoes);
   }
   catch(e){
       //se nao salva localmente
        mensagem = await salvarCartoesStore(listaDeCartoes); 
   }
    
    notificar(mensagem);
    
    btnSync.disabled = false;
    btnSync.classList.replace('botaoSync--esperando','botaoSync--sincronizado');

});