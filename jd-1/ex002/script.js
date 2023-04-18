const notas = document.querySelector('#calcular');
const resultado = document.querySelector('.resultado');

notas.addEventListener("click", (evento) => {
    resultado.innerHTML = 'Fui clicado'
})