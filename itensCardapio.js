class ItensCardapio {
    static idProdCardapio = 0
    constructor(produto,precoProduto) {
        this.idProdCardapio = ++ItensCardapio.idProdCardapio
        this.produto = produto
        this.precoProduto = precoProduto
    }
}
module.exports = ItensCardapio