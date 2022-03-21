const Pessoa = require('./pessoa')

class Pedido {
    static counter = 1
    constructor(idLoja, idCliente, produto, precoProduto, quantidade) {
        this.id = Pedido.counter
        this.idLoja = idLoja
        this.idCliente = idCliente
        this.produto = produto
        this.precoProduto = precoProduto
        this.quantidade = quantidade
        this.precoFinal = this.precoProduto * this.quantidade
        this.pedidoRealizado = false
        this.pedidoConfirmado = false
        this.entregador = undefined
        this.pedidoFinalizado = false        
        Pedido.counter += 1
    }
}

class Cliente extends Pessoa {
    #senha
    #checarArray
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

    #getIndexPedido(pedido, array) {
        if (pedido instanceof Pedido) {
            if (this.carrinho.includes(pedido)) {
                return array.indexOf(pedido)
            } else {
                return false
            }
        } else if (Number.isInteger(pedido)) {
            array.forEach((objeto) => {
                if (objeto.id === pedido) {
                    return array.indexOf(objeto)
                }
            })
        }
        return false 
    }

    cancelarCarrinho() {
        this.carrinho = []
    }

    addItem(pedido) {
        this.carrinho.push(pedido)
    }

    removerItem(pedido) {
        let indexPedido = getIndexPedido(pedido, this.carrinho)
        if (indexPedido !== false) {
            this.pedidosRealizados.splice(this.carrinho.indexOf(pedido), 1)
            console.log('Pedido removido.')            
        } else {
            console.log('Pedido não encontrado!')
        }
    }

    alterarQuantItem(pedido, quantidade) {
        let indexPedido = getIndexPedido(pedido, this.carrinho)
        if (indexPedido !== false) {
            let objeto = this.carrinho[indexPedido]
            objeto.quantidade = quantidade
            objeto.precoFinal = objeto.precoProduto * objeto.quantidade
            console.log('Quantidade alterada.')
        } else {
            console.log('Pedido não encontrado!')
        }
    }

    realizarPedido() {
        this.pedidosRealizados = this.carrinho.map(objeto => {
            objeto.pedidoRealizado = true
            return objeto            
        })
        this.carrinho = []
    }


    cancelarPedido(pedido) {
        let indexPedido = getIndexPedido(pedido, this.pedidosRealizados)
        if (indexPedido !== false) {
            if (this.entregador !== undefined) {
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
        let indexPedido = getIndexPedido(pedido, this.pedidosRealizados)
        if (indexPedido !== false) {
            let objeto = this.pedidosRealizados[indexPedido]
            objeto.pedidoFinalizado = true
            console.log('Pedido finalizado.')
        } else {
            console.log('Pedido não encontrado!')
        }
    }
}

// Testes
const cliente = new Cliente('João', '2000-12-09', '12345678900', 'jao@mail.com', '123456')
const pedido = new Pedido(1, 1, 'big mac', 8, 2)
// console.log(pedido)
cliente.addItem(pedido)
console.log(cliente)
cliente.alterarQuantItem(1, 4)
console.log(cliente)
cliente.realizarPedido()
cliente.cancelarPedido(pedido)
console.log(cliente)
