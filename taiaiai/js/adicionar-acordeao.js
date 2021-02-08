

const template = document.querySelector('#template-acordeao');

export function adicionarAcordeao(nome, titulo, conteudo) {
    const acordeao = template.content.firstElementChild.cloneNode(true);
    acordeao.innerHTML = acordeao.innerHTML.replace('{{NOME_EMISSOR}}', nome).replace('{{TITULO_MENSAGEM}}', titulo).replace('{{CONTEUDO_MENSAGEM}}', conteudo);
    document.body.append(acordeao);
    
}