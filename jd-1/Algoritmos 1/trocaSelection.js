function trocaSelection(livros,atual, menor) {
    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

module.exports = trocaSelection;