const Pessoa = require('./pessoa')
const Pedido = require('./pedido')


class Cliente extends Pessoa {
    #endereco
    #senha
    constructor(nome, dataNasc, cpf, email, senha, endereco) {
        super(nome, dataNasc, cpf, email)        
        this.#senha = senha
        this.#endereco = endereco
        this.carrinho = []
    }

    get endereco() {
        return this.#endereco
    }

    set endereco(endereco) {
        this.#endereco = endereco
    }

    set senha(senha) {
        this.#senha = senha
    }

    imprimirDados() {
        super.imprimirDados()
        console.log(`Senha: ${this.#senha}\nEndereco: ${this.#endereco}`)
    }

    getIndexPedido(idPedido, array) {   
        if (Number.isSafeInteger(Number.parseInt(idPedido))) {
            const pedido = array.find(obj => obj.id === idPedido)
            return array.indexOf(pedido)
        } else {                
            return false 
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
                const pedido = new Pedido(lojista.idLoja, this.id, this.endereco, produto.produto, 
                    produto.precoProduto, quantidade)
                    this.carrinho.push(pedido)
                    console.log('Pedido adicionado.')  
            } else {
                console.log('Produto não encontrado.')    
            }              
        }
        
    }

    removerItem(idPedido) {
        const pedido = this.pedidosRealizados.find(item=>item.id === idPedido)
        let indexPedido = this.getIndexPedido(pedido, this.carrinho)                
        if (Number.isSafeInteger(indexPedido) && indexPedido !== -1) {
            this.carrinho.splice(indexPedido, 1)
            console.log('Pedido removido.')            
        } else {
            console.log('Pedido não encontrado!')
        }
    }

    alterarQuantItem(idPedido, quantidade) {
        let indexPedido = this.getIndexPedido(idPedido, this.carrinho)
        if (Number.isSafeInteger(indexPedido)) {
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

    cancelarPedido(idPedido) {
        let indexPedido = this.getIndexPedido(idPedido, this.pedidosRealizados)                
        if (Number.isSafeInteger(indexPedido) && indexPedido !== -1) {
            if (this.pedidosRealizados[indexPedido].entregador === undefined) {
                this.pedidosRealizados.splice(indexPedido, 1)
                console.log('Pedido cancelado.')
            } else {
                console.log('Pedido não pode ser cancelado pois há um entregador associado.')
            }
        } else {
            console.log('Pedido não encontrado!')
        }
    }

    finalizarPedido(idPedido) {
        const pedido = this.pedidosRealizados.find(item=>item.id === idPedido)                
        if (pedido !== undefined) {
            pedido.pedidoFinalizado = true
            console.log('Pedido finalizado.')
        } else {
            console.log('Pedido não encontrado!')
        }
    }
}

module.exports = Cliente