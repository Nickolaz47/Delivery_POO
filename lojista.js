// O lojista poderá manipular o cardápio (adicionar, remover, alterar os pratos). 
// Poderá, também, cancelar um pedido que esteja em andamento, ao qual esteja associado;

const Pessoa = require('./pessoa')
// const Pedido = require('./cliente')

/*
Lojista herdará de pessoa, somente nome e email (colocar cnpj)
Lojista herdará de Pedido, somente idLoja, produto, precoProduto, pedidoRealizado 
*/

// class Pessoa {
//     #id
//     #nome
//     #dataNasc    
//     #cpf
//     #email
//     static counter = 1
//     constructor(nome, dataNasc, cpf, email) {
//         this.#id = Pessoa.counter
//         this.#nome = nome
//         this.#dataNasc = dataNasc
//         this.#cpf = cpf
//         this.#email = email
//         Pessoa.counter += 1
//     }



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
    constructor(nome,dataNasc,cpf,email,senha) {
        super(nome,dataNasc,cpf,email)
        this.#senha = senha
        this.cardapio = []
    }

    set senha(senha) {
        this.#senha = senha
    }

    
    addItemCardapio(item) {
        this.cardapio.push(item)
    }

    removerItemCardapio() {

    }

    alterarItemCardapio() {

    }

    cancelarPedidoEmAndamento() {
        
    }

}

// Testes
const lojista = new Lojista("João","2003-02-13","12345678910","joaozinho@gmail.com","1234")

const item1 = new ItensCardapio("Pão",10)
const item2 = new ItensCardapio("Bife",20)
lojista.addItemCardapio(item1)
lojista.addItemCardapio(item2)

console.log(lojista)

// class Cardapio extends Pedido {
//     constructor(idLoja,idCliente) {
//         super(idLoja,idCliente)
//         this.cardapio = cardapio
//     }
// }



