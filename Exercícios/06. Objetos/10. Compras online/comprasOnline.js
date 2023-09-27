const carrinho = {
    item: {
        nome: 'TV Samsung 4K',
        valorEmCentavos: 129900
    },
    quantidade: 1
}

// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

jose.carrinho.push(
    { item: { nome: tv.nome, valorEmCentavos: tv.valorEmCentavos }, quantidade: 1 },
    { item: { nome: caboUsb.nome, valorEmCentavos: caboUsb.valorEmCentavos }, quantidade: 2 },
    { item: { nome: webcam.nome, valorEmCentavos: webcam.valorEmCentavos }, quantidade: 2 }
);

console.log(jose);

carlos.carrinho.push(
    { item: { nome: notebook.nome, valorEmCentavos: notebook.valorEmCentavos }, quantidade: 2 }
);

console.log(carlos);

patricia.carrinho.push(
    { item: { nome: teclado.nome, valorEmCentavos: teclado.valorEmCentavos }, quantidade: 1 },
    { item: { nome: caboUsb.nome, valorEmCentavos: caboUsb.valorEmCentavos }, quantidade: 2 },
    { item: { nome: carregador.nome, valorEmCentavos: carregador.valorEmCentavos }, quantidade: 1 },
    { item: { nome: mouse.nome, valorEmCentavos: mouse.valorEmCentavos }, quantidade: 1 },
    { item: { nome: monitor.nome, valorEmCentavos: monitor.valorEmCentavos }, quantidade: 1 }
);

console.log(patricia);

renato.carrinho.push(
    { item: { nome: webcam.nome, valorEmCentavos: webcam.valorEmCentavos }, quantidade: 5 }
);

console.log(renato);

roberto.carrinho.push(
    { item: { nome: webcam.nome, valorEmCentavos: webcam.valorEmCentavos }, quantidade: 1 },
    { item: { nome: caboUsb.nome, valorEmCentavos: caboUsb.valorEmCentavos }, quantidade: 2 },
    { item: { nome: monitor.nome, valorEmCentavos: monitor.valorEmCentavos }, quantidade: 1 }
);

console.log(roberto);