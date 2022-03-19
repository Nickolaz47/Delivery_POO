const Pessoa = require('./pessoa')

class Entregador extends Pessoa{
    #senha
    constructor(nome, dataNasc, cpf, email, senha) {
        super(nome, dataNasc, cpf, email)
        this.#senha = senha
    }

    set senha(senha) {
        this.#senha = senha
    }

    imprimirDados() {
        super.imprimirDados()
        console.log(`Senha: ${this.#senha}`)
    }

    visualizarPedidos() {}
    
    aceitarPedido() {}
}
