import './views/btnAjuda.js';
import './views/btnMudaLayout.js';
import './views/mural.js';
import './views/formulario-cartao.js';
import './views/busca.js';
import './views/btnSync.js';
import './views/btnLogout.js'

//documento onde importamos todos os JS que deverão ser lidos pelo programa, de fato que podemos chamar apenas esse aqui no script
//do HTML, com tanto que tenha o type="module" - que sinaliza que estamos trabalhando com modularização

//arquivos do server nao precisam ser importados

//COMO ESSE ARQUIVO GERENCIA TUDO, REGISTRAREMOS O SERVICE WORKER AQUI

async function registrarServiceWorker() {
    if ('serviceWorker' in navigator) {
        const registro = await navigator.serviceWorker.register('/projeto/sw.js', {
            updateViaCache: 'none'
        });
        console.log('service worker registrado', registro);
    }
}

registrarServiceWorker();
