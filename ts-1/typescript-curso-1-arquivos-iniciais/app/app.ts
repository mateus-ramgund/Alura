import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    })
} else {
    throw Error('Não foi possívei inicializar a aplicação. Verifique se o form existe.')
}

const negociacoesView = new NegociacoesView('#negociacoesView');


// const template = negociacoesView.template;
// console.log(template);