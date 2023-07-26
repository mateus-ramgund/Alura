
let botaoValidador = document.querySelector('#botaoValidador')
let resultado = document.querySelector('#resultado')


botaoValidador.addEventListener('click', validarPalavra)

function validarPalavra() {
    let palavra = document.querySelector('#palavra')
    let palavraFinal = palavra.value

    let separandoAsLetras = palavraFinal.split('')
    let palavraInvertida = separandoAsLetras.reverse()
    palavraInvertida = palavraInvertida.join('')

    if (palavraFinal == palavraInvertida) {
        resultado.innerHTML = `A palavra ${palavraFinal} é um palíndromo`
    } else {
        resultado.innerHTML = `A palavra ${palavraFinal} não é um palíndromo`
    }
}
