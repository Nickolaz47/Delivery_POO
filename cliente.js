const Pessoa = require('./pessoa')

class Pedido {
    static counter = 1
    constructor(loja, cliente, produto, precoProduto, quantidade) {
        this.id = Pedido.counter
        this.loja = loja
        this.cliente = cliente
        this.produto = produto
        this.precoProduto = precoProduto
        this.precoFinal = calcPrecoFinal()
        this.quantidade = quantidade
        this.entregador = ''
        Pedido.counter += 1
    }

    calcPrecoFinal() {
        return this.precoProduto * this.quantidade
    }
}

class Cliente extends Pessoa {
    #senha
    constructor(nome, dataNasc, cpf, email, senha) {
        super(nome, dataNasc, cpf, email)        
        this.#senha = senha
        this.carrinho = []
    }

    set senha(senha) {
        this.#senha = senha
    }

    imprimirDados() {
        super.imprimirDados()
        console.log(`Senha: ${this.#senha}`)
    }

    cancelarCarrinho() {
        this.carrinho = []
    }

    addItem(pedido) {
        this.carrinho.push(pedido)
    }

    removerItem(pedido) {
        this.carrinho.splice(this.carrinho.indexOf(pedido), 1)
    }

    alterarQuantItem(pedido, quantidade) {
        pedido.quantidade = quantidade
    }

    realizarPedido() {}
}