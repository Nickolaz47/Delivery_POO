const Pessoa = require('./pessoa')

class Entregador extends Pessoa{
    #senha
    constructor(nome, dataNasc, cpf, email, id, senha) {
        super(nome, dataNasc, cpf, email)
        this.id = id
        this.#senha = senha
    }

    get senha() {
        return this.#senha
    }

    set senha(senha) {
        this.#senha = senha
    }

    imprimirDados() {
        super.imprimirDados()
        console.log(`ID: ${this.id})\nSenha: ${this.#senha}`)
    }

    visualizarPedidos() {}
    
    aceitarPedido() {}
}
