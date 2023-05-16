const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["81 9 99999999", "81 9 88888888"],
};

cliente.telefone[2] = "81 9 77777777";

cliente.enderecos = [
    {
        rua: "R. Félix de Brito",
        numero: 425,
        apartamento: true,
        complemento: "ap 104",
    },
];

cliente.enderecos.push({
    rua: "R. Dr. Raul Lafayette",
    numero: 122,
    apartamento: false,
    complemento: "nenhum",
},)



const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);


console.log(cliente.enderecos);
console.log(listaApenasApartamentos);
