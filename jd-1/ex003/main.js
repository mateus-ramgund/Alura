const fazer = document.querySelectorAll("[data-fazer]");
const lista = document.querySelector(".lista");

fazer.forEach( (botaoclicado) => {
    botaoclicado.addEventListener("click", (acao) => {
        manipulaDados(acao.target.dataset.fazer);
    })
})

function manipulaDados(realizar) {
    if (realizar === "esconder") {
        lista.style.display = "none";
    } else {
        lista.style.display = "block";
    }
}
