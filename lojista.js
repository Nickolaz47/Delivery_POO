// O lojista poderá manipular o cardápio (adicionar, remover, alterar os pratos). 
// Poderá, também, cancelar um pedido que esteja em andamento, ao qual esteja associado;

// const Pessoa = require('./pessoa')
const Pedido = require('./cliente')

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


// class Lojista extends Pessoa {
//     #senha
//     constructor(nome,dataNasc,cnpj,email,senha) {
//         super(nome,dataNasc,cnpj,email)
//         this.#senha = senha
//     }
//     set senha(senha) {
//        this.#senha = senha
//     }

//     get cnpj() {
//         return this.#cnpj
//     }
// }

// class Lojista extends Pessoa {
//     #senha
//     constructor(nome,dataNasc,cpf,email,senha) {
//         super(nome,dataNasc,cpf,email)
//         this.#senha = senha
//         this.cardapio = cardapio
//     }

//     set senha(senha) {
//         this.#senha = senha
//     }
// }

// class Pedido {
//     static counter = 1
//     constructor(idLoja, idCliente, produto, precoProduto, quantidade) {
//         this.id = Pedido.counter
//         this.idLoja = idLoja
//         this.idCliente = idCliente
//         this.produto = produto
//         this.precoProduto = precoProduto
//         this.quantidade = quantidade
//         this.precoFinal = this.precoProduto * this.quantidade
//         this.pedidoRealizado = false
//         this.pedidoConfirmado = false
//         this.entregador = undefined
//         this.pedidoFinalizado = false        
//         Pedido.counter += 1
//     }
// }

const objetoProduto = {
    produto:"" ,
    precoProduto:"" ,
}

// const cardapio = []

class Loja extends Pedido {
    constructor(idLoja,idCliente) {
        super(idLoja,idCliente)
        this.cardapio = []
    }

    addCardapio (produto,precoProduto) {
        objetoProduto.produto = produto
        objetoProduto.precoProduto = precoProduto
        this.cardapio.push(objetoProduto)
    }
}

const prod1 = new Loja(1,2)
// Loja.addCardapio("Bife acebolado",20)
prod1.addCardapio("Bife acebolado",20)
console.log(prod1)

