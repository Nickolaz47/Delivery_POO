const Pessoa = require('./pessoa')

class Pedido {
    constructor(id, loja, cliente, produto, precoProduto, quantidade) {
        this.id = id
        this.loja = loja
        this.cliente = cliente
        this.produto = produto
        this.precoProduto = precoProduto
        this.precoFinal = calcPrecoFinal()
        this.quantidade = quantidade
        this.entregador = ''
    }

    calcPrecoFinal() {
        return this.precoProduto * this.quantidade
    }
}

class Cliente extends Pessoa {
    #id
    #senha
    constructor(nome, dataNasc, cpf, email, id, senha) {
        super(nome, dataNasc, cpf, email)
        this.#id = id
        this.#senha = senha
        this.carrinho = []
    }

    get id() { 
        return this.#id 
    }

    set senha(senha) {
        this.#senha = senha
    }

    imprimirDados() {
        super.imprimirDados()
        console.log(`ID: ${this.#id}\nSenha: ${this.#senha}`)
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