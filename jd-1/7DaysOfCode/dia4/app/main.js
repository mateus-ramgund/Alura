let start = document.querySelector('[data-start]');
let resultado = document.querySelector('#resultado');


start.addEventListener('click', comecarJogo);

let c = 0

function comecarJogo() {
    var numero = Math.floor(Math.random() * 10);
    console.log(numero);
    let chances = 3;
    resultado.innerHTML = `
            <h2 class="subtitulo">Digite abaixo seu chute. Você tem ${chances} tentativas.</h2>
            <input type="text" name="texto" id="texto" class="area__texto" data-numero-chutado>
            <input type="button" value="Chutar" class="botao" data-chute>
            <p data-resposta></p>
        `
    let chute = document.querySelector('[data-chute]');
    let numeroChutado = document.querySelector('[data-numero-chutado]');
    let respostaErrada = document.querySelector('[data-resposta]');

    chute.addEventListener('click', chutar);
    let tentativas = 0;
    function chutar () {
        if (tentativas < 2) {
            if (numeroChutado.value == numero) {
                resultado.innerHTML = `<h2 class="subtitulo">Você acertou! ${numero} é o número correto.</h2>`
            } else {
                respostaErrada.innerHTML = `O número ${numeroChutado.value} está incorreto. Tente novamente!`
            }
            console.log(tentativas)
        } else {
            if (numeroChutado.value == numero) {
                resultado.innerHTML = `<h2 class="subtitulo">Você acertou! ${numero} é o número correto.</h2>`
            } else {
                resultado.innerHTML = `
            <h1 class="titulo">GAME OVER</h2>
            <h2 class="subtitulo">O número correto era ${numero}.</h2>
            `
            }
        }
        tentativas++
    }
}
