let produtoIgual = false;
let quantidade = 0;
let total = 0;
let descontoAcimaQuatroItens = 0;
let descontoAcimaCemReais = 0;
let desconto = 0;

//Novo Produto
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function imprimirResumoDoCarrinho() {
        this.calcularTotalDeItens();
        this.calcularTotalAPagar();

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${quantidade} itens`);
        console.log(`Total de itens: R$ ${total.toFixed(2)}`);
    },
    addProduto: function addProdutoAoCarrinho(carrinho, y) {
        for (let j of carrinho.produtos) {
            if (j.id === y.id) {
                j.qtd = y.qtd;
                produtoIgual = true;
            }
        }
        if (produtoIgual === false) {
            carrinho.produtos.push(y)
        }
    },
    imprimirDetalhes: function imprimirDetalhesDoCarrinho() {
        console.log(`Cliente: ${carrinho.nomeDoCliente}`);
        this.calcularTotalDeItens();
        this.calcularTotalAPagar();
        for (let k of this.produtos) {
            console.log(`Item ${k.id} - ${k.nome} - ${k.qtd} und - R$ ${k.precoUnit.toFixed(2)}`);
        }
        let item = (quantidade > 1 ? "itens" : "item");
        console.log(`Total de ${item}: ${quantidade}`);
        console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
    },
    calcularTotalDeItens: function calcularTotalDeItens() {
        quantidade = 0;
        for (let l of this.produtos) {
            quantidade += l.qtd;
        }
    },
    calcularTotalAPagar: function calcularTotalAPagar() {
        total = 0;
        for (let m of this.produtos) {
            total = total + (m.qtd * m.precoUnit);
        }
    },
    calcularDesconto: function calcularDesconto() {
        this.calcularTotalDeItens();
        if (quantidade > 4) {
            let menorPrecoUnit = 99999999999999999;
            for (let n of this.produtos) {
                if (n.precoUnit < menorPrecoUnit) {
                    menorPrecoUnit = n.precoUnit
                }
            }
            descontoAcimaQuatroItens = menorPrecoUnit;
        }
        this.calcularTotalAPagar();
        if (total > 100) {
            descontoAcimaCemReais = total * 0.1
        }
        if (descontoAcimaCemReais > descontoAcimaQuatroItens) {
            desconto = descontoAcimaCemReais
        } else {
            desconto = descontoAcimaQuatroItens
        }
    }
}