// M: montante (o capital acrescido dos juros, ou seja, Capital + Juros)
// C: capital (valor inicial de uma dívida, empréstimo ou investimento)
// i: taxa fixa de juros (expressa em decimal na fórmula, ou seja, o valor da taxa dividido por 100)
// t: período de tempo

let c = 1000;
let i = 0.125;
let t = 5;

console.log(`O valor do montante será de R$ ${c * ( 1 + i ) ** t}.`);