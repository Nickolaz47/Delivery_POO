const Pessoa = require('./pessoa');
const Cliente = require('./cliente');
const Pedido = require('./pedido');
const Lojista = require('./lojista');
const ItensCardapio = require('./itensCardapio');


const lojista1 = new Lojista("João","2003-02-13","12345678910","joaozinho@gmail.com",1,"1234")
const cliente1 = new Cliente("João","2003-02-13","12345678910","joaozinho@gmail.com","1234")
const pedido1 = new Pedido(1, 1, 'big mac', 8, 2)
const pedido2 = new Pedido(1, 1, 'big mac', 8, 2)
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
//lojista1.cancelarPedidoEmAndamento(cliente1, 1)
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
