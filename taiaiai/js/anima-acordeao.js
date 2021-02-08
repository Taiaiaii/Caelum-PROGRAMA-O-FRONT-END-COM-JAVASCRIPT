export function animaAcordeao() {
    const acordeoes = document.querySelectorAll('.acordeoes');

    for (let acordeao of acordeoes) {
        acordeao.addEventListener('click', (event) => {

            if (event.target.tagName == 'H2') {
                const conteudo = event.target.nextElementSibling;
                let altura = conteudo.firstElementChild.offsetHeight;

                if (conteudo.offsetHeight != 0) {
                    altura = 0;
                }

                conteudo.animate(
                    { height: altura + 'px'}, 
                    { duration: 600,
                    fill: 'forwards'
                });

                

            }

        });
    }

}