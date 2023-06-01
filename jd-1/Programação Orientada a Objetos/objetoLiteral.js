const user = {
    nome: 'Mateus',
    email: 'mramgund@gmail.com',
    nascimento: '09/08/1994',
    role: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: 'Mariana',
    email: 'm@m.com',
    nascimento: '30/09/1991',
    role: 'admin',
    ativo: true,
    criarCurso() {
        console.log('Curso criado.')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()

// user.exibirInfos( )
// const exibir = user.exibirInfos
// exibir()

const exibir = function() {
    console.log(this.nome)
};

const exibirNome = exibir.bind(user)

exibirNome()
exibir()
