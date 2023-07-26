let nome = document.querySelector('#nome')
let idade = document.querySelector('#idade')
let linguagem = document.querySelector('#linguagem')
let botao = document.querySelector('#botao')
let resultado = document.querySelector('#resultado')

botao.addEventListener('click', gerarResposta)

function gerarResposta () {
    resultado.innerHTML = `
    Olá ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${linguagem.value}!
    
    <p>Você gosta de estudar ${linguagem.value}? Responda com o número 1 para SIM ou 2 para NÃO.</p>

    <input type="text" name="gosta" id="gosta">
    <input type="submit" value="Enviar" id="botao2">
    `
    let gosta = document.querySelector('#gosta')
    let botao2 = document.querySelector('#botao2')
    let resultado2 = document.querySelector('#resultado2')

    botao2.addEventListener('click', verificarGosto)

    function verificarGosto () {
        if (gosta.value == 1) {
            resultado2.innerHTML = 'Muito bom! Continue estudando e você terá muito sucesso.'
        } else if (gosta.value == 2) {
            resultado2.innerHTML = 'Ahh que pena... Já tentou aprender outras linguagens?'
        } else {
            resultado2.innerHTML = 'Por favor, digite uma resposta válida.'
        }
    }
}
