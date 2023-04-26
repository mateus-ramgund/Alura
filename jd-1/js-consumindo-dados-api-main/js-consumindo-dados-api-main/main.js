var cep = document.querySelector('#cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))

async function buscaEndereco(cep) {
    var mensagemErro = document.querySelector('#erro');
    mensagemErro.innerHTML = '';
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPconvertida = await consultaCEP.json();
        if (consultaCEPconvertida.erro) {
            throw Error('CEP não existe');
        }
        var cidade = document.querySelector('#cidade');
        var logradouro = document.querySelector('#endereco');
        var estado = document.querySelector('#estado');

        cidade.value = consultaCEPconvertida.localidade;
        logradouro.value = consultaCEPconvertida.logradouro;
        estado.value = consultaCEPconvertida.uf;
        
        console.log(consultaCEPconvertida);
        return consultaCEPconvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido! Tente novamente.</p>`
        console.log(erro)
    }
    
}
