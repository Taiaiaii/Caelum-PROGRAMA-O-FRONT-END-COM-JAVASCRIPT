import {adicionarAcordeao} from './adicionar-acordeao.js';



export function salvarDados() {
    let acordeaoSalvo = localStorage.getItem('dadosAcordeoes');
    let dado = JSON.parse(acordeaoSalvo);
    adicionarAcordeao(dado.nome, dado.titulo, dado.conteudo);

    const dados = {
        nome: nome,
        titulo: titulo,
        conteudo: conteudo,
    }
    localStorage.setItem('dadosAcordeoes', JSON.stringify(dados));
}