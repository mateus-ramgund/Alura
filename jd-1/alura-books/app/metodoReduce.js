function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livros.reduce((acc, livro) => Number(acc) + Number(livro.preco), 0).toFixed(2)
}