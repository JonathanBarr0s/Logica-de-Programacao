const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

filaDePedidos[filaDePedidos.length] = "pedido 15";

filaDePedidos.shift();

console.log(filaDePedidos);