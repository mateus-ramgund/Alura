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

for (let chave in cliente) {
    let static tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}.`);
    }
}