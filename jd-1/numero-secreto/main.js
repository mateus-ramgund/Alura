const menorValor = 1;
const maiorValor = 100;
const numeroAleatorio = gerarNumero();


function gerarNumero() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log('Número secreto: ', numeroAleatorio);

const elementoMenorValor = document.querySelector('#menorValor');
const elementoMaiorValor = document.querySelector('#maiorValor');

elementoMenorValor.innerHTML = menorValor
elementoMaiorValor.innerHTML = maiorValor