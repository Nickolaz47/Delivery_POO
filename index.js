const Pessoa = require('./pessoa');
const Cliente = require('./cliente');
const Pedido = require('./pedido');
const Lojista = require('./lojista');
const ItensCardapio = require('./itensCardapio');
const Entregador = require('./entregador');

// Instanciando as pessoas
const lojista1 = new Lojista("José","1973-12-03","12345678910","zezinho@gmail.com",1,"1234")
const cliente1 = new Cliente("João","2003-02-13","12345678910","joaozinho@gmail.com","1234")
const entregador1 = new Entregador("Batista","1985-08-02","01236578932",'batista@email.com','@senha')

// Instanciando o cardápio
const item1 = new ItensCardapio('Hamburger', 8.00)
const item2 = new ItensCardapio('Batata Frita', 6.00)
const item3 = new ItensCardapio('Refrigerante', 5.00)
lojista1.addItemCardapio(item1)
lojista1.addItemCardapio(item2)
lojista1.addItemCardapio(item3)

console.log("================ Cliente ================")
cliente1.addItem(lojista1, 1, 2)
cliente1.addItem(lojista1, 2, 1)
cliente1.addItem(lojista1, 1, 1)
cliente1.realizarPedido(lojista1)
//cliente1.finalizarPedido(1)
//console.log(cliente1)
// console.log(cliente)

console.log("================ Lojista ================")
lojista1.confirmarPedido(cliente1,1)
lojista1.confirmarPedido(cliente1,2)
//lojista1.cancelarPedidoEmAndamento(cliente1, 2)
cliente1.finalizarPedido(1)
lojista1.concluirPedido(cliente1)
console.log(lojista1)
console.log(cliente1)

// lojista.addItemCardapio(item1)
// lojista.addItemCardapio(item2)
// lojista.removerItemCardapio(item2)
// lojista.cancelarPedidoEmAndamento()
// lojista.confirmarPedido()
// console.log(lojista)
/* 
const item1 = new ItensCardapio("Pão",10)
const item2 = new ItensCardapio("Bife",20)
lojista.addItemCardapio(item1)
lojista.addItemCardapio(item2)
lojista.removerItemCardapio(item2)
lojista.cancelarPedidoEmAndamento() */


entregador1.imprimirDados()
entregador1.visualizarPedidos(lojista1)

console.log("---------------------------")
console.log(lojista1.pedidosConfirmados)
entregador1.associarPedido(lojista1, cliente1, 3)
entregador1.associarPedido(lojista1, cliente1, 1)



console.log("---------------------------")
console.log(lojista1.pedidosConfirmados)
cliente1.cancelarPedido(1)
cliente1.cancelarPedido(2)
cliente1.cancelarPedido(3)


