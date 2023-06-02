import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }
    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas.`
    }
}
/*
const novoAdmin = new Admin('Aline', 'alineeepds@gmail.com', '11/06/1993')

console.log(novoAdmin.criarCurso('JS', 20));
*/