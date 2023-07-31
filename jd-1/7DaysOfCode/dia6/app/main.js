const sim = document.querySelector('[data-sim]');
const nao = document.querySelector('[data-nao]');
const comunicador = document.querySelector('#comunicador');
let pergunta = document.querySelector('#pergunta');
let comida = document.querySelector('#comida');
const adicionar = document.querySelector('[data-add]');
const escolherCategoria = document.querySelector('#escolher-categoria');
let categoria = document.querySelector('#categoria');
const finalizar = document.querySelector('[data-finalizar]');
const voltar = document.querySelector('[data-voltar]');
let listaDeCompras = document.querySelector('#lista-de-compras');
const botaoRemover = document.querySelector('[data-remover]');
let campoDeTextoRemoverComida = document.querySelector('[data-remover-comida');
const removerComida = document.querySelector('[data-botao-remover]');
const erro = document.querySelector('[data-botao-erro]');

const frutas = [];
const laticinios = [];
const congelados = [];
const doces = [];

const desejo = document.querySelectorAll('.desejo');

desejo.forEach(btn => btn.addEventListener('click', mostrarResposta));

function mostrarResposta (btn) {
    if (btn.target.value == 'Sim') {
        telaDeAdicionar()
    } else {
        comunicador.style.display = 'none';
        listaDeCompras.style.display = 'block'
        listaDeCompras.innerHTML = `
        <p>Frutas: ${frutas}</p>
        <p>Laticínios: ${laticinios}</p>
        <p>Congelados: ${congelados}</p>
        <p>Doces: ${doces}</p>
        `
        voltar.style.display = 'block';
    }
}

function telaDeAdicionar () {
    pergunta.innerHTML = 'Qual comida você deseja inserir?';
    sim.style.display = 'none';
    nao.style.display = 'none';
    comida.style.display = 'block';
    adicionar.style.display = 'block';
    escolherCategoria.style.display = 'flex';
    botaoRemover.style.display = 'none';
}

adicionar.addEventListener('click', adicionarComida)

function adicionarComida () {
    if (categoria.value == 'frutas') {
        frutas.push(comida.value);
    } else if (categoria.value == 'laticinios') {
        laticinios.push(comida.value);
    } else if (categoria.value == 'congelados') {
        congelados.push(comida.value);
    } else if (categoria.value == 'doces') {
        doces.push(comida.value);
    }
    console.log(frutas, laticinios, congelados, doces);
    comida.value = '';
}

finalizar.addEventListener('click', finalizarLista);

function finalizarLista () {
    pergunta.innerHTML = 'Você deseja adicionar uma comida na sua lista?';
    sim.style.display = 'block';
    nao.style.display = 'block';
    escolherCategoria.style.display = 'none';
    comida.style.display = 'none';
    botaoRemover.style.display = 'block';
    if (frutas.length == 0 && laticinios.length == 0 && congelados.length ==0 && doces.length == 0) {
        botaoRemover.style.display = 'none'
    } else {
        botaoRemover.style.display = 'block'
    }
}

voltar.addEventListener('click', voltarParaOInicio);

function voltarParaOInicio () {
    pergunta.innerHTML = 'Você deseja adicionar uma comida na sua lista?';
    sim.style.display = 'block';
    nao.style.display = 'block';
    escolherCategoria.style.display = 'none';
    comida.style.display = 'none';
    comunicador.style.display = 'flex';
    voltar.style.display = 'none';
    listaDeCompras.style.display = 'none'
    campoDeTextoRemoverComida.style.display = 'none';
    removerComida.style.display = 'none';
    erro.style.display = 'none';
    if (frutas.length == 0 && laticinios.length == 0 && congelados.length ==0 && doces.length == 0) {
        botaoRemover.style.display = 'none'
    } else {
        botaoRemover.style.display = 'block'
    }
}

botaoRemover.addEventListener('click', abrirInterfaceRemover);

function abrirInterfaceRemover () {
    comunicador.style.display = 'none';
    listaDeCompras.style.display = 'block';
    listaDeCompras.innerHTML = `
        <p>Frutas: ${frutas}</p>
        <p>Laticínios: ${laticinios}</p>
        <p>Congelados: ${congelados}</p>
        <p>Doces: ${doces}</p>
        `
        voltar.style.display = 'block';
        campoDeTextoRemoverComida.style.display = 'block';
        removerComida.style.display = 'block';
}

removerComida.addEventListener('click', removerComidaDaLista);

function removerComidaDaLista () {
    erro.style.display = 'none'
    if (frutas.includes(campoDeTextoRemoverComida.value)) {
        let comidaASerRemovida = frutas.indexOf(campoDeTextoRemoverComida.value);
        frutas.splice(comidaASerRemovida, 1);
    } else if (laticinios.includes(campoDeTextoRemoverComida.value)) {
        let comidaASerRemovida = laticinios.indexOf(campoDeTextoRemoverComida.value);
        laticinios.splice(comidaASerRemovida, 1);
    } else if (congelados.includes(campoDeTextoRemoverComida.value)) {
        let comidaASerRemovida = congelados.indexOf(campoDeTextoRemoverComida.value);
        congelados.splice(comidaASerRemovida, 1);
    } else if (doces.includes(campoDeTextoRemoverComida.value)) {
        let comidaASerRemovida = doces.indexOf(campoDeTextoRemoverComida.value);
        doces.splice(comidaASerRemovida, 1);
    } else {
        erro.style.display = 'block';
    }
    console.log(frutas, laticinios, congelados, doces);
    campoDeTextoRemoverComida.value = '';
    abrirInterfaceRemover()
}
