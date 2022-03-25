// Importações das classes usadas para testes
const Cliente = require('./cliente');
const Lojista = require('./lojista');
const ItensCardapio = require('./itensCardapio');
const Entregador = require('./entregador');

// Criação de objetos usados para testes
const lojista1 = new Lojista("João","2003-02-13","12345678910","joaozinho@gmail.com",1,"1234")
const cliente1 = new Cliente("João","2003-02-13","12345678910","joaozinho@gmail.com","1234")
const item1 = new ItensCardapio('Hamburger', 8.00)
const item2 = new ItensCardapio('Batata Frita', 6.00)
const item3 = new ItensCardapio('Refrigerante', 5.00)
const entregador1 = new Entregador("Batista","02-08-1985","01236578932",'batista@email.com','@senha')

// LOJISTA (antes do pedido)
console.log("LOJISTA ADICIONA/MODIFICA/REMOVE ITENS DO CARDÁPIO")
lojista1.addItemCardapio(item1)
lojista1.addItemCardapio(item2)
lojista1.addItemCardapio(item3)
lojista1. removerItemCardapio(item3)
lojista1.alterarItemCardapio(item2,"Aneis de Cebola",10.00)
console.log("CARDAPIO FINAL")
console.log(lojista1.cardapio) 
console.log("LOJISTA CONFIRMA PEDIDO REALIZADO/CANCELA PEDIDO EM ANDAMENTO")

// CLIENTE (criando carrinho de compras e fazendo o pedido)
console.log("CLIENTE ADICIONA ITENS AO CARRINHO")
cliente1.addItem(lojista1, 1, 2)
cliente1.addItem(lojista1, 2, 1)
cliente1.addItem(lojista1, 1, 1)
console.log("CLIENTE REALIZA/FINALIZA PEDIDO EM UMA LOJA ASSOCIADA A UM LOJISTA")
cliente1.realizarPedido(lojista1)
cliente1.finalizarPedido(1)
cliente1.realizarPedido(lojista1)
cliente1.finalizarPedido(2)
console.log("PEDIDOS REALIZADOS")
console.log(cliente1)

// LOJISTA (após realização do pedido)
console.log("LOJISTA CONFIRMA/CANCELA/CONCLUI PEDIDO")
lojista1.confirmarPedido(cliente1,1)
lojista1.confirmarPedido(cliente1,2)
lojista1.cancelarPedidoEmAndamento(cliente1, 2)
lojista1.concluirPedido(cliente1)
console.log("PEDIDOS CONFIRMADOS/CONCLUÍDOS PELO LOJISTA")
console.log(lojista1)

// CLIENTE (cancelando o pedido após confirmação do lojista)
console.log("CANCELANDO PEDIDO")
cliente1.cancelarPedido(1)
cliente1.cancelarPedido(2)
cliente1.cancelarPedido(3)

// ENTREGADOR 
console.log("ENTRANDO COMO ENTREGADOR")
entregador1.imprimirDados()
console.log("VISUALIZANDO PEDIDOS DISPONÍVEIS ")
entregador1.visualizarPedidos(lojista1)
console.log("ASSOCIANDO-SE COMO ENTREGADOR DO(S) PEDIDOS")
entregador1.associarPedido(lojista1,3)
entregador1.associarPedido(lojista1,1)

// console.log("---------------------------")
// console.log(lojista1.pedidosConfirmados)
