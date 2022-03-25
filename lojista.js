const Pessoa = require('./pessoa');
const ItensCardapio = require('./itensCardapio');

class Lojista extends Pessoa {
    #senha
    constructor(nome,dataNasc,cpf,email,idLoja,senha) {
        super(nome,dataNasc,cpf,email)
        this.idLoja = idLoja
        this.#senha = senha
        this.cardapio = []
        this.pedidosConfirmados = []
        this.pedidosEmEspera = []
        this.pedidosFinalizados = []
    }

    set senha(senha) {
        this.#senha = senha
    }

    addItemCardapio(item) {
        this.cardapio.push(item)
        console.log("[INFO]: Item adicionado ao cardápio.")
    }

    removerItemCardapio(item) {
        if (!this.cardapio.includes(item)) {
            return console.log("Item não está no cardápio")
        }
        this.cardapio.splice(this.cardapio.indexOf(item),1)
        console.log("[INFO]: Um item foi removido do cardápio.")
    }

    alterarItemCardapio(itemAlterado,novoProduto,novoPreco) {
        this.cardapio[this.cardapio.indexOf(itemAlterado)] = new ItensCardapio(novoProduto,novoPreco)
        console.log("[INFO]: Um item foi alterado no cardápio.")
    }
    cancelarPedidoEmAndamento(cliente,idPedido) {
        for (let i = 0; i < this.pedidosConfirmados.length; i++){
            if (this.pedidosConfirmados[i].id == idPedido){
                cliente.cancelarPedido(this.pedidosConfirmados[i])
                console.log("Pedido cancelado com sucesso")
                this.pedidosConfirmados.splice(i, 1)
                break
            }else{
                console.log("Pedido não associado")
            }
        }
    }

    confirmarPedido(cliente, idPedido) {
        const pedido = this.pedidosEmEspera.find(item=>item.id === idPedido)
        if(pedido !== undefined){
            let indexPedido = this.pedidosEmEspera.indexOf(pedido) 
            let IndexPedidoCliente = cliente.pedidosRealizados.indexOf(pedido)
            this.pedidosEmEspera.splice(indexPedido, 1)
            pedido.pedidoConfirmado = true
            this.pedidosConfirmados.push(pedido)
            cliente.pedidosRealizados[IndexPedidoCliente].pedidoConfirmado = true
            console.log('Pedido confirmado!')
        }else{
            console.log('Pedido não encontrado.')
        }
    }

    validaPedidos(pedidos){
        for(let pedido of pedidos){
            if(pedido.idLoja === this.idLoja){
                pedido.pedidoConfirmado = true
                this.pedidosEmEspera.push(pedido)
            }
        }
    }

    concluirPedido(cliente){
        cliente.pedidosRealizados.forEach(item => { 
            if(item.idLoja === this.idLoja && item.pedidoFinalizado){
                const idPedido = item.id
                const pedido = this.pedidosConfirmados.find(objeto=>objeto.id === idPedido)
                this.pedidosConfirmados.splice(this.pedidosConfirmados.indexOf(pedido),1)
                this.pedidosFinalizados.push(item)
            }
        });
    }
}

module.exports = Lojista