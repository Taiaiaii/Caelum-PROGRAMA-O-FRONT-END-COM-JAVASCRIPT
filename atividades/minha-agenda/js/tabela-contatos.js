const tabela = document.querySelector('#tabelaContatos');

export function adicionarContato(nome, telefone) {
    

    const novaLinha = document.createElement('tr'); // se criada fora do else, so salva 1. pq? -pq fora do submit ele cria uma e atualiza, aqui dentro ele cria uma a cada iteração
    novaLinha.innerHTML =
        `
                <td>${nome}</td>
                <td>${telefone}</td>
                <td><button class="btn btn-danger btn-sm">Excluir</button></td>
                `;
    tabela.append(novaLinha);
    

}

tabela.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-danger')) {
        const botaoExcluir = event.target;
        botaoExcluir.closest('tr').remove();
    }
});

// primeiro criamos a constante tabela para receber a referencia do elemento que contem o id tabelaContatos. Então criamos uma função exportavel (para 
// que possa ser chamada em outro documento) que recebe os parametros nome e telefone. Dentro da função criamos a função novaLinha que recebe 
// a criação de um elemento tr na DOM. A ela atribuimos a propriedade innerHTML na qual configuramos os elementos html e as variáveis que são os para 
// metros da função. Pedimos que à variavel tabela seja adicionada a novaLinha.
// Por ultimo, fora da função, adicionamos um evento escutador de flic a tabela. Abrimos uma estrutura do tipo if que verifica se o alvo do evento  
// contem a classe btn-danger. Em caso positivo criamso uma constante botaoExcluir que recebe o alvo do evento. Adicionamos a ela então um remove
// para o elemento mais proximo que seja uma tr. Isso pq o botaoExcluir é um button que está dentro de uma tr, e queremos que ao ser acionado, ele  
// remova toda a linha(tr) a que pertence.