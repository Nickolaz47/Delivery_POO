const Pessoa = require('./pessoa');
const Cliente = require('./cliente');
const Pedido = require('./pedido');
const Lojista = require('./lojista');
const ItensCardapio = require('./itensCardapio');

const lojista = new Lojista("João","2003-02-13","12345678910","joaozinho@gmail.com",1,"1234")
const cliente = new Cliente("João","2003-02-13","12345678910","joaozinho@gmail.com","1234")
const pedido = new Pedido(1, 1, 'big mac', 8, 2)
/* 
const item1 = new ItensCardapio("Pão",10)
const item2 = new ItensCardapio("Bife",20)
lojista.addItemCardapio(item1)
lojista.addItemCardapio(item2)
lojista.removerItemCardapio(item2)
lojista.cancelarPedidoEmAndamento() */
