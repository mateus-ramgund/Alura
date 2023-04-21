function verificaSeChutePossuiValorValido () {
    const numero = +chute; 

    if(chute === 'game over') {
        document.body.innerHTML = `
        <h2>Game over!</h2>
        <h3>O número aleatório era ${numeroAleatorio}, mas você não acertou</h3>
        <but;ton id="jogar-novamente" class="btn-jogar"><i class="fa-solid fa-play"></i>  Jogar novamente</button>
        `
        document.body.style.backgroundColor = 'red'
    } 

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido.</div>';
        return;  
    }

    if (numeroMaiorMenorQuePermitido(numero)) {
        elementoChute.innerHTML += `<div>O número pescisa estar entre ${menorValor} e ${maiorValor}.</div>`;
        return;
    }
    
    if (numero === numeroAleatorio) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número aleatório era ${numeroAleatorio}.</h3>
        <but;ton id="jogar-novamente" class="btn-jogar"><i class="fa-solid fa-play"></i>  Jogar novamente</button>
        `
        
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML += `
        <div><p>O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i></p></div>
        `;
    } else {
        elementoChute.innerHTML += `
        <div><p>O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i></p></div>
        `;
    }
}

function chuteForInvalido(numero) {
    
    return Number.isNaN(numero); 
}

function numeroMaiorMenorQuePermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => { 
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})