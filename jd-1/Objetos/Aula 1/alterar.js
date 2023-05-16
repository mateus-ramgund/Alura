const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
};

const pessoa2 = Object.create(pessoa);
pessoa2.nome = "Jose";
pessoa2.profissao = "Designer";

pessoa.telefone = "81 999999999";
pessoa.nome = "Luma Silva";

console.log(pessoa);
console.log(pessoa2);
