import usuarioLogado from '../storage/login-usuario.js'  // caso de export default nao coloca chaves


/**
 * Retorna a lista de instruções de ajuda da API do CEEP
 * @returns {Promise<Array>}
 */
export async function getInstrucoes() {
    const resposta = await fetch('http://wd47-ceep.herokuapp.com/get-instrucoes.php ');
    const dadosCarregados = await resposta.json();

    return dadosCarregados.instrucoes;
}
/**
 * função que salva cartões presentes no murall no back-end via API
 * @param {Array} listaDeCartoes Array de cartões a serem salvos no back-end
 * @return {Promise<string>}
 */
export async function salvarCartoes(listaDeCartoes){

    try{

        const infoUsuario = {
            usuario: usuarioLogado,
            cartoes: listaDeCartoes
        };  //criando um obj

        let url = 'http://wd47-ceep.herokuapp.com/salvar-cartoes.php ';
        const respostaServidor = await fetch(url, { //abrindo uma requisição
            method: 'POST',  // configurando metodo
            header: { 
                'Content-type' : 'application/json'  //tipo de conteudo
            },
            body: JSON.stringify(infoUsuario) //transformando o a função pra string json

        });

        const statusServidor = await respostaServidor.json();
        
        

        if(statusServidor.quantidade == 1) {
            return 'cartão salvo com sucesso!';
        }else 
            return statusServidor.quantidade + ' cartões salvos com sucesso!';

    }
    catch(e){
        console.error(e);
        return 'erro ao enviar informações para o servidor!';
    }

}
/**
 * retorna a lista de cartões salvos no back-end
 * @return {Promise<Array>}
 */
export async function getCartoesSalvos() {

    let usuario = usuarioLogado;
    let url = "http://wd47-ceep.herokuapp.com/get-cartoes.php?usuario=" + usuario;

    const resposta = await fetch(url);
    const dadosCartoes = await resposta.json();

    return dadosCartoes.cartoes ?? []; // ?? diz que se for nulo retorna array vazio, se nao retorna ele mesmo
}