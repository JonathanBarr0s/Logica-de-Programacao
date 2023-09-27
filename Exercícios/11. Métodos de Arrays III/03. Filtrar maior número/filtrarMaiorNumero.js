const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce(function(maior, numero) {
  return numero > maior ? numero : maior;
}, numeros[0]);

console.log(maiorNumero);
