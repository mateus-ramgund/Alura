const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["81999999999", "81988888888"],
};

cliente.enderecos = [
    {
        rua: "R. Felix de Brito Melo",
        numero: 425,
        apartamento: true,
        complemento: "ap 104",
    }
];

function ligaParaCliente (telefoneComercial, telefoneResidencial) {
    console.log(`Ligando para ${telefoneComercial}.`)
    console.log(`Ligando para ${telefoneResidencial}.`)
}

ligaParaCliente(...cliente.telefone);

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0],
}

console.log(encomenda);