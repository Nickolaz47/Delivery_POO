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
        if (pedido instanceof Pedido) {
            if (this.carrinho.includes(pedido)) {
                this.carrinho.splice(this.carrinho.indexOf(pedido), 1)
                console.log('Pedido removido.')
            } else {
                console.log('Pedido não existe!')
            }
        } else {
            let removed = false
            this.carrinho.forEach((objeto) => {
                if (objeto.id === pedido) {
                    this.carrinho.splice(this.carrinho.indexOf(pedido), 1)
                    removed = true
                    console.log('Pedido removido.')
                }
            })
            if (removed === false) {
                console.log('Pedido não existe!')
            }
        }
    }

    alterarQuantItem(pedido, quantidade) {
        if (pedido instanceof Pedido) {
            if (this.carrinho.includes(pedido)) {
                pedido.quantidade = quantidade
                pedido.precoFinal = pedido.precoProduto * pedido.quantidade
                console.log('Quantidade alterada.')
            } else {
                console.log('Pedido não encontrado.')
            }
        } else {
            let modified = false
            this.carrinho.forEach((objeto) => {
                if (objeto.id === pedido) {
                    objeto.quantidade = quantidade
                    objeto.precoFinal = objeto.precoProduto * objeto.quantidade
                    modified = true
                    console.log('Quantidade alterada.')
                }
            })
            if (modified === false) {
                console.log('Pedido não encontrado!')
            }            
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
        if (pedido instanceof Pedido && this.pedidosRealizados !== undefined) {
            if (this.pedidosRealizados.includes(pedido)) {
                if (pedido.entregador === undefined) {
                    this.pedidosRealizados.splice(this.pedidosRealizados.indexOf(pedido), 1)
                    console.log('Pedido cancelado.')
                } else {
                    console.log('Pedido não pode ser cancelado pois há um entregador associado.')
                }
            } else {
                console.log('Pedido não encontrado.')
            }
        } else if (Number.isSafeInteger(pedido) && this.pedidosRealizados !== undefined) {
            let canceled = false
            this.carrinho.forEach((objeto) => {
                if (objeto.id === pedido) {
                    if (objeto.entregador === undefined) {
                        this.pedidosRealizados.splice(this.pedidosRealizados.indexOf(objeto), 1)
                        console.log('Pedido cancelado.')
                        canceled = true
                    } else {
                        console.log('Pedido não pode ser cancelado pois há um entregador associado.')
                    }
                }
            })
            if (canceled === false) {
                console.log('Pedido não encontrado!')
            }            
        } else {
            console.log('Pedido não encontrado/Nenhum pedido foi realizado.')
        }
    }

    finalizarPedido(pedido) {
        if (pedido instanceof Pedido) {
            if (this.pedidosRealizados.includes(pedido)) {
                pedido.pedidoFinalizado = true                
                console.log('Pedido finalizado.')
            } else {
                console.log('Pedido não encontrado.')
            }
        } else {
            let finished = false
            this.carrinho.forEach((objeto) => {
                if (objeto.id === pedido) {
                    pedido.pedidoFinalizado = true
                    finished = true
                    console.log('Pedido finalizado.')
                }
            })
            if (finished === false) {
                console.log('Pedido não encontrado!')
            }            
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
