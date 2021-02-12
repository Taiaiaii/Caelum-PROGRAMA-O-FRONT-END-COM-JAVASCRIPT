let db;
const subscribers = [];

const requestDb = indexedDB.open('db_ceep_backup', 1); //versão 1, para caso haja alguma alteração o brownser possa comparar a versão do script com a do cliente que ja utiliza


requestDb.addEventListener('success', ()=>{
    db = requestDb.result;
    carregarCartoes();
});

requestDb.addEventListener('upgradeneeded', () => {
    db = requestDb.result;
    db.createObjectStore('store_cartoes', // criação de tabelas no indexedDb
    {keyPath: 'id', autoIncrement: true} // identificador unico de cada registro. a cada novo registro o valor é incrementado      
    ); 
});

function carregarCartoes() {
    const tx =db.transaction('store_cartoes');
    const request = tx.objectStore('store_cartoes').getAll();

    request.onsuccess = () => {
        const listaDeCartoes = request.result ?? [];
        subscribers.forEach(funcaoCallback => {
            funcaoCallback(listaDeCartoes);
        })
    };
}

/**
 * realiza a inscrições de funççoes callback (subscribers) que precisam ser executadas qnd a lista de cartoes locais estiverem carregados e disponiveis
 */
export function IDBSubscribeOnLoadCartoes(funcaoCallback) {
    subscribers.push(funcaoCallback);
}

/**
 * função que salva localmente (no navegador)  os cartões criados pelo usuário
 * @param {Array} listaDeCartoes a serem salvos na base de dados local;
 * @returns{Promise<string>}
 */
export function salvarCartoesStore(listaDeCartoes) {  //banco de dados de back-up, para caso por exemplo o usuario esteja sem internet, nao perder seus dados

    return new Promise(async function(resolve, reject){  // função callback de promise
        await excluiCartoesStore ()
        const tx = db.transaction('store_cartoes', 'readwrite');
        

        for (let cartao of listaDeCartoes) {
            tx.objectStore('store_cartoes').add(cartao);
        }

        tx.oncomplete = () => resolve('cartões salvos com sucesso na base de dado local');
        tx.onerror = ()=> reject('erro ao salvar dados na base de dados local!');
    });
}

/** * Função que exclui os cartões salvos no banco de dados do front-end 
 * * @returns {Promise<string>} 
 * */
export function excluiCartoesStore() {
    return new Promise(function (resolve, reject) {
        const tx = db.transaction('store_cartoes', 'readwrite');
        tx.objectStore('store_cartoes').clear();
        tx.oncomplete = () => resolve('Cartões locais excluídos com sucesso!');
        tx.onerror = () => reject('Erro ao excluir cartões da base de dados local!');
    });
}