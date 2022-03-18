const Pessoa = require('./pessoa')

class Cliente extends Pessoa {
    #id
    #senha
    constructor(nome, dataNasc, cpf, email, id, senha) {
        super(nome, dataNasc, cpf, email)
        this.#id = id
        this.#senha = senha
    }

    get id() { 
        return this.#id 
    }

    set senha(senha) {
        this.#senha = senha
    }

    imprimirDados() {
        super.imprimirDados()
        console.log(`ID: ${this.#id})\nSenha: ${this.#senha}`)
    }

    montarCarrinho() {}

    cancelarCarrinho() {}

    addItem() {}

    removerItem() {}

    alterarQuantItem() {}

    realizarPedido() {}
}