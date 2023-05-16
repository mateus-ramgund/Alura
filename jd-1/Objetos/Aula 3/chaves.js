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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro. É necessário ter um endereço cadastrado.")
}