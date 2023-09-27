let m = 90000;
let c = 60000;
let n = 24;

const taxaJuros = (((m / c) ** (1 / n)) - 1) * 100;

console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${taxaJuros}%, pois após ${n} meses você teve que pagar ${m} reais.`);