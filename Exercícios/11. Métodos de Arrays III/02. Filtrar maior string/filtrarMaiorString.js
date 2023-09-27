const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const maiorCidade = cidades.reduce(function (maior, cidade) {
  return cidade.length > maior.length ? cidade : maior;
}, "");

console.log(maiorCidade);
