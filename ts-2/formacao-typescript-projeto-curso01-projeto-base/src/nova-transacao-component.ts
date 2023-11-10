import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

const elementoFormulario = <HTMLFormElement> document.querySelector('.block-nova-transacao form');
elementoFormulario.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!elementoFormulario.checkValidity()) {
        alert ('Por favor, preencha todos os campos da transação!');
        return;
    }

    const inputTipoTransacao = <HTMLSelectElement> elementoFormulario.querySelector('#tipoTransacao');
    const inputValor = <HTMLInputElement> elementoFormulario.querySelector('#valor');
    const inputData = <HTMLInputElement> elementoFormulario.querySelector('#data');

    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);

    if (tipoTransacao == 'Depósito') {
        saldo += valor;
    } else if (tipoTransacao == 'Transferência' || tipoTransacao == 'Pagamento de Boleto') {
        saldo -= valor;
    } else {
        alert ('Tipo de transação é inválida!');
        return;
    }

    elementoSaldo.textContent = saldo.toString();

    const novaTransacao: Transacao = {
        tipoTransacao:  tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset();
});