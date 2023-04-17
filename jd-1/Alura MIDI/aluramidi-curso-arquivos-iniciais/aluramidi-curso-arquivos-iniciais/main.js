function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento.localName === 'audio' && elemento /*!= null*/)  {
        elemento.play();
    } else {
        alert('Elemento/seletor inválido ou não encontrado!');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
        
    }
    tecla.onkeyup = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.remove('ativa');
        }
        
    }
}

/*
for (contador in listaDeTeclas) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
}
*/
/*

let contador = 0;
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    contador = contador + 1;
}
*/
