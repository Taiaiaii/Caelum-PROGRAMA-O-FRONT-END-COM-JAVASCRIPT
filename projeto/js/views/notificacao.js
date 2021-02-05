const divMsg = document.createElement('div');
divMsg.classList.add('formNovoCartao-msg');
divMsg.addEventListener('animationend', () => divMsg.remove());

export function notificar (msg) {
    divMsg.textContent = msg;
    document.body.append(divMsg);
}

// aqui criamos uma constante chamada divMsg que receberá a referencia da criação de um elemento div na DOM. 
// adicionamos a essa constante uma classe, e posteriormente um evento escutador de animationed (sinaliza quando uma animação de css encerrou)
// e pedimos que para que quando isso ocorrer a div seja removida através de uma função do tipo arrow (=>). Fazemos isso para que não se acumulem
// varias divs notificadoras toda vez que o erro ocorrer. Assim ela é criada, animada e removida.
// entao criamos uma função exportadora para especificar o comportamento dessa div. A função tem como parametro msg, que será setada quando a função   
// for chamada. Dizemos que a divMsg deve ter como contexto textual a msg. Depois pedimos que ao corpo do doc, seja adicionado por ultimo a div.


