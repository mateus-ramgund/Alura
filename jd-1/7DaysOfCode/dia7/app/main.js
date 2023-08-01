let botoes = document.querySelectorAll('.calculo');
const areaDosBotoes = document.querySelector('#botoes');
const areaDeCalculo = document.querySelector('#area-de-calculo');
const textoDePergunta = document.querySelector('#pergunta');
const areaDeResposta = document.querySelector('#area-de-resposta');
const resposta = document.querySelector('#resposta');
const voltar = document.querySelector('[data-voltar]');

let primeiroNumeroDigitado = document.querySelector('[data-primeiro-numero');
let segundoNumeroDigitado = document.querySelector('[data-segundo-numero');
let botaoCalcular = document.querySelector('[data-calcular]');

botoes.forEach(botao => botao.addEventListener('click', selecionarAcao));

function selecionarAcao (botao) {
    let acao = botao.target.value;
    areaDosBotoes.style.display = 'none';
    if (acao == 'Sair') {
        textoDePergunta.innerHTML = 'Até a próxima!'
        voltar.style.display = 'block';
    } else {
        areaDeCalculo.style.display = 'block';
        botaoCalcular.addEventListener('click', calcular);

        function calcular () {
            if (primeiroNumeroDigitado.value == '' || segundoNumeroDigitado.value == '') {
                areaDeResposta.style.display = 'block';
                resposta.innerHTML = 'Digite um número válido!';
            } else {
                switch (acao) {
                    case 'Soma':
                        let soma = somar(Number(primeiroNumeroDigitado.value), Number(segundoNumeroDigitado.value));
                        areaDeCalculo.style.display = 'none';
                        areaDeResposta.style.display = 'block';
                        voltar.style.display = 'block';
                        resposta.innerHTML = `<p>A ${acao} entre ${primeiroNumeroDigitado.value} e ${segundoNumeroDigitado.value} é igual a <strong>${soma}</strong>.</p>`;
                        break;
                    case 'Subtração':
                        let subtracao = subtrair(Number(primeiroNumeroDigitado.value), Number(segundoNumeroDigitado.value));
                        areaDeCalculo.style.display = 'none';
                        areaDeResposta.style.display = 'block';
                        voltar.style.display = 'block';
                        resposta.innerHTML = `<p>A ${acao} entre ${primeiroNumeroDigitado.value} e ${segundoNumeroDigitado.value} é igual a <strong>${subtracao}</strong>.</p>`;
                        break;
                    case 'Multiplicação':
                        let produto = multiplicar(Number(primeiroNumeroDigitado.value), Number(segundoNumeroDigitado.value));
                        areaDeCalculo.style.display = 'none';
                        areaDeResposta.style.display = 'block';
                        voltar.style.display = 'block';
                        resposta.innerHTML = `<p>A ${acao} entre ${primeiroNumeroDigitado.value} e ${segundoNumeroDigitado.value} é igual a <strong>${produto}</strong>.</p>`;
                        break;
                    case 'Divisão':
                        let divisao = dividir(Number(primeiroNumeroDigitado.value), Number(segundoNumeroDigitado.value));
                        areaDeCalculo.style.display = 'none';
                        areaDeResposta.style.display = 'block';
                        voltar.style.display = 'block';
                        resposta.innerHTML = `<p>A ${acao} entre ${primeiroNumeroDigitado.value} e ${segundoNumeroDigitado.value} é igual a <strong>${divisao}</strong>.</p>`;
                        break;
                }
            }
        }
    }
}

function somar (a, b) {
    return a + b;
}

function subtrair (a, b) {
    return a - b;
}

function multiplicar (a, b) {
    return a * b;
}

function dividir (a, b) {
    return a / b;
}

voltar.addEventListener ('click', voltarParaEscolha);

function voltarParaEscolha () {
    areaDeResposta.style.display = 'none';
    areaDosBotoes.style.display = 'block';
    voltar.style.display = 'none';
    textoDePergunta.innerHTML = 'Escolha o cálculo que você deseja realizar:';
    primeiroNumeroDigitado.value = '';
    segundoNumeroDigitado.value = '';
}