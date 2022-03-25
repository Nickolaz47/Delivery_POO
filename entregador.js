const Pedido = require('./pedido')
const Pessoa = require('./pessoa')

class Entregador extends Pessoa{
    #senha
    constructor(nome, dataNasc, cpf, email, senha) {
        super(nome, dataNasc, cpf, email)
        this.#senha = senha
    }

    set senha(senha) {
        this.#senha = senha
    }

    imprimirDados() {
        super.imprimirDados()
        console.log(`Senha: ${this.#senha}`)
    }

    visualizarPedidos(lojista) {
        console.log("Pedidos confirmados de " + lojista.nome)    
        console.log(lojista.pedidosConfirmados)
    }

    associarPedido(lojista,id){
        lojista.pedidosConfirmados.forEach(element => {
            if(element.id===id){
                element.entregador = this.nome
            }
        });
    }
}

    module.exports = Entregador
