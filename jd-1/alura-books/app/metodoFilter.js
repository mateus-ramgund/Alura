const botoes = document.querySelectorAll('.btn')
botoes.forEach (btn => btn.addEventListener('click', filtrarLivros))
/*
function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}
*/

function filtrarLivros(botao) {
    let livrosFiltrados = botao.srcElement.value == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(botao)
    exibirOsLivrosNaTela(livrosFiltrados)

    if (botao.srcElement.value == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}


function filtrarPorCategoria(botao) {
    return livros.filter(livro => livro.categoria == botao.srcElement.value)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}