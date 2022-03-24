const Pessoa = require('./pessoa')
const Pedido = require('./pedido')


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

    getIndexPedido(pedido, array) {   
        if (pedido instanceof Pedido) {
            if (array.includes(pedido)) {
                return array.indexOf(pedido)
            } else {
                return false
            }
        } else {
            if (Number.isSafeInteger(Number.parseInt(pedido))) {
                return array.map(objeto => {
                    if (objeto.id === pedido) {                        
                        return array.indexOf(objeto)
                    }              
                })[0]
            } else {                
                return false 
            }
        }
    }

    cancelarCarrinho() {
        this.carrinho = []
    }

    addItem(lojista, idProduto, quantidade) {
        if (lojista.cardapio === undefined || lojista.cardapio === []) {
            console.log('Cardápio da loja está indisponível.')
        } else {
            const produto = lojista.cardapio.find(item => item.idProdCardapio === idProduto)
            if (produto !== undefined) {
                const pedido = new Pedido(lojista.idLoja, this.id, produto.produto, 
                    produto.precoProduto, quantidade)
                    this.carrinho.push(pedido)
                    console.log('Pedido adicionado.')  
            } else {
                console.log('Produto não encontrado.')    
            }              
        }
        
    }

    removerItem(pedido) {
        let indexPedido = this.getIndexPedido(pedido, this.carrinho)                
        if (Number.isSafeInteger(indexPedido)) {
            this.carrinho.splice(this.carrinho.indexOf(pedido), 1)
            console.log('Pedido removido.')            
        } else {
            console.log('Pedido não encontrado!')
        }
    }

    alterarQuantItem(pedido, quantidade) {
        let indexPedido = this.getIndexPedido(pedido, this.carrinho)
        if (Number.isSafeInteger(indexPedido)) {
            let objeto = this.carrinho[indexPedido]
            objeto.quantidade = quantidade
            objeto.precoFinal = objeto.precoProduto * objeto.quantidade
            console.log('Quantidade alterada.')
        } else {
            console.log('Pedido não encontrado!')
        }
    }

    realizarPedido(lojista) {
        this.pedidosRealizados = this.carrinho.map(objeto => {
            objeto.pedidoRealizado = true
            return objeto            
        })
        this.carrinho = []
        lojista.pedidosConfirmados.push(this.pedidosRealizados)
    }

    cancelarPedido(pedido) {
        let indexPedido = this.getIndexPedido(pedido, this.pedidosRealizados)        
        if (Number.isSafeInteger(indexPedido)) {
            if (this.entregador === undefined) {
                this.pedidosRealizados.splice(this.pedidosRealizados.indexOf(pedido), 1)
                console.log('Pedido cancelado.')
            } else {
                console.log('Pedido não pode ser cancelado pois há um entregador associado.')
            }
        } else {
            console.log('Pedido não encontrado!')
        }
    }

    finalizarPedido(pedido) {
        let indexPedido = this.getIndexPedido(pedido, this.pedidosRealizados)        
        if (Number.isSafeInteger(indexPedido)) {
            let objeto = this.pedidosRealizados[indexPedido]
            objeto.pedidoFinalizado = true
            console.log('Pedido finalizado.')
        } else {
            console.log('Pedido não encontrado!')
        }
    }
}

module.exports = Cliente  

// Testes
// const cliente = new Cliente('João', '2000-12-09', '12345678900', 'jao@mail.com', '123456')
// const pedido = new Pedido(1, 1, 'big mac', 8, 2)
// cliente.addItem(pedido)
// cliente.realizarPedido()
// cliente.finalizarPedido(1)
// console.log(cliente)
