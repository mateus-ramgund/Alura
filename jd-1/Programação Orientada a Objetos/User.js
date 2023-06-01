export default class User {
    constructor(nome, email, nascsimento, role, ativo = true) {
        this.nome = nome
        this.email = email
        this.nascsimento = nascsimento
        this.role = role || 'estudante'
        this.ativo = ativo
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}
