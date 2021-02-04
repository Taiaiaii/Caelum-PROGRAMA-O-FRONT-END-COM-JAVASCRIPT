//validação de form

// 1) Guardarmos a referência do formulário e do campo de texto presentes na página;
// 2) Adicionarmos um evento "submit"
// ao formulário;
// 3) Impedirmos o recarregamento da página quando o formulário
// for submetido;
// 4) Verificamos se o campo de texto está vazio, e caso esteja, criamos uma div em memória que será usada para exibir a mensagem de erro para o usuário;
// 5) Adicionamos a esta div virtual uma classe chamada "formNovoCartao-msg"
// e Como conteúdo textual da div criada, colocamos a mensagem 'Por favor, preencha o campo corretamente!';
// 6) Inserimos a div na DOM como último elemento filho do formulário;
// 7) Por fim, adicionamos o evento "animationend"
// à div criada.Como a classe "formNovoCartao-msg"
// tem uma animação CSS associada a ela(com efeito de entrada e de saída), para removermos a mensagem de erro na tela, precisamos esperar a animação terminar.Quem nos permite saber quando ela termina é o evento "animationend".

const formulario = document.querySelector('form');
const campoTexto = formulario.querySelector('textarea');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!campoTexto.value.trim()) {
        const divMsg = document.createElement('div');
        divMsg.classList.add('formNovoCartao-msg');
        divMsg.textContent = "por favor preencha o campo corretamente";

        formulario.append(divMsg);

    divMsg.addEventListener('animationend', ()=> divMsg.remove());

    }
});