/*
function User(nome, email) {
    this.nome = nome;
    this.email = email;

    this.exibirInfos = function() {
        return `${this.nome}, ${this.email}`
    }
}

// const novoUser = new User('Mateus', 'mramgund@gmail.com');
// console.log(novoUser.exibirInfos())

function Admin(role) {
    User.call(this, 'Mateus', 'mramgund@gmail.com');
    this.role = role || 'estudante';
}

Admin.prototype = Object.create(User.prototype);
const novoUser = new Admin('admin');

console.log(novoUser.exibirInfos());
console.log(novoUser.role);
*/

const user = {
    init: function(nome, email) {
        this.nome = nome;
        this.email = email;
    },
    exibirInfos: function(nome, email) {
        return `${this.nome}, ${this.email}`;
    }
}

const novoUser = Object.create(user);
novoUser.init('Mateus', 'mramgund@gmail.com')
console.log(novoUser.exibirInfos());
