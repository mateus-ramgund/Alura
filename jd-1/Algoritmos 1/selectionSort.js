const livros = require('./listaLivros');
const menorValor = require('./menorValor');
const trocaSelection = require('./trocaSelection');

for (let atual = 0; atual < livros.length -1; atual ++) {
    let menor = menorValor(livros, atual)
    trocaSelection(livros, atual, menor)
}

console.log(livros);
