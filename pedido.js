class Pedido {
    static counter = 1
    constructor(idLoja, idCliente, enderecoCliente, produto, precoProduto, quantidade) {
        this.id = Pedido.counter
        this.idLoja = idLoja
        this.idCliente = idCliente
        this.enderecoCliente = enderecoCliente
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
module.exports = Pedido