let botao = document.querySelectorAll('.botao');
let resposta = document.querySelector('.resposta');
let listaDeTecnologias = [];

botao.forEach (btn => btn.addEventListener('click', receberResposta))

function receberResposta(btn) {
    if (btn.srcElement.value == 'Front-End') {
        resposta.innerHTML = `
        <h2 class="subtitulo">Qual tecnologia você deseja estudar no momento?</h2>
        <input type="button" value="React" class="botao2">
        <input type="button" value="Vue" class="botao2">
        `
    } else if (btn.srcElement.value == 'Back-End') {
        resposta.innerHTML = `
        <h2 class="subtitulo">Qual tecnologia você deseja estudar no momento?</h2>
        <input type="button" value="C#" class="botao2">
        <input type="button" value="Java" class="botao2">
        `
    }
    let area = btn.srcElement.value
    let botao2 = document.querySelectorAll('.botao2');
    botao2.forEach (btn2 => btn2.addEventListener('click', receberResposta2))

    function receberResposta2(btn2) {
        let tecnologia = btn2.srcElement.value
        resposta.innerHTML = `
            <h2 class="subtitulo">Como você deseja se especializar?</h2>
            <input type="button" value="Como ${area}" class="botao3">
            <input type="button" value="Como FullStack" class="botao3">
            `
        let botao3 = document.querySelectorAll('.botao3');
        botao3.forEach (btn3 => btn3.addEventListener('click', receberResposta3))

        function receberResposta3(btn3) {
            let especializacao = btn3.srcElement.value;
            resposta.innerHTML = `
                <h2 class="subtitulo">Quais tecnologias a mais você deseja aprender? (adicione quantas você quiser e no final clique em finalizar)</h2>
                <input type="text" class="area__texto" placeholder="Digite aqui a tecnologia desejada..." data-tecnologia-add>
                <input type="button" value="Adicionar" class="botao4" data-adicionar>
                <input type="submit" value="Finalizar" class="botao4" data-finalizar>
                `
            let tecnologiaDigitada = document.querySelector('[data-tecnologia-add]');
            
            let botaoAdicionar = document.querySelector('[data-adicionar]');
            botaoAdicionar.addEventListener('click', adicionarTecnologia)

            function adicionarTecnologia() {
                listaDeTecnologias.push(tecnologiaDigitada.value)
                tecnologiaDigitada.value = ''
            }

            let botaoFinalizar = document.querySelector('[data-finalizar]');
            botaoFinalizar.addEventListener('click', finalizar)

            function finalizar() {
                resposta.innerHTML = `Você escolheu a área de ${area}, vai comneçar a estudar ${tecnologia}, pretende seguir ${especializacao.toLowerCase()} e ainda quer aprender ${listaDeTecnologias}.`
            }
        }
    }  
}
