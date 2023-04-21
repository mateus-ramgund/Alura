const elementoChute = document.querySelector('#chute');


window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start();
recognition.addEventListener('result', onSpeak)

const resultado = document.querySelector('.box')

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeChutePossuiValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div><p>Você disse:</p></div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())