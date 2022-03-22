// O lojista poderá manipular o cardápio (adicionar, remover, alterar os pratos). 
// Poderá, também, cancelar um pedido que esteja em andamento, ao qual esteja associado;
// Ao finalizar um pedido, o lojista terá a sua lista de pedidos atualizada com este

const Pessoa = require('./pessoa')
const importCliente = require('./cliente')
const Cliente = importCliente.Cliente 
const Pedido = importCliente.Pedido

class ItensCardapio {
    static idProdCardapio = 0
    constructor(produto,precoProduto) {
        this.idProdCardapio = ++ItensCardapio.idProdCardapio
        this.produto = produto
        this.precoProduto = precoProduto
    }
}

class Lojista extends Pessoa {
    #senha
    constructor(nome,dataNasc,cpf,email,idLoja,senha) {
        super(nome,dataNasc,cpf,email)
        this.idLoja = idLoja
        this.#senha = senha
        this.cardapio = []
    }

    set senha(senha) {
        this.#senha = senha
    }

    
    addItemCardapio(item) {
        this.cardapio.push(item)
    }

    removerItemCardapio(item) {
        if (!this.cardapio.includes(item)) {
            return console.log("Item não está no cardápio")
        }
        this.cardapio.splice(this.cardapio.indexOf(item),1)
    }

    alterarItemCardapio(itemAlterado,novoProduto,novoPreco) {
        this.cardapio[this.cardapio.indexOf(itemAlterado)] = new ItensCardapio(novoProduto,novoPreco)
    }
    cancelarPedidoEmAndamento() {
        // Identificar associação: Se o id da loja, no pedido, for igual ao id setado 
        /* 
        Poderá, também, cancelar um pedido que esteja em andamento, ao qual esteja associado
        */
       // Caso o pedido tenha sido realizado, mas não finalizado
        if(Pedido.idLoja === this.idLoja) {
            if(Pedido.pedidoRealizado === true && Pedido.pedidoFinalizado === true) {
                Pedido.pedidoFinalizado === false
            }
        }
    }

}

// Testes
const lojista = new Lojista("João","2003-02-13","12345678910","joaozinho@gmail.com",1,"1234")
const cliente = new Cliente('João', '2000-12-09', '12345678900', 'jao@mail.com', '123456')
const pedido = new Pedido(1, 1, 'big mac', 8, 2)

const item1 = new ItensCardapio("Pão",10)
const item2 = new ItensCardapio("Bife",20)
lojista.addItemCardapio(item1)
lojista.addItemCardapio(item2)
lojista.removerItemCardapio(item2)
lojista.cancelarPedidoEmAndamento()

console.log(lojista)


// class Cardapio extends Pedido {
//     constructor(idLoja,idCliente) {
//         super(idLoja,idCliente)
//         this.cardapio = cardapio
//     }
// }



