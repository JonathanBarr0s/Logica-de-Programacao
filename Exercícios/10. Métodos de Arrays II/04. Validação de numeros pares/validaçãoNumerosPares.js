const numeros = [0, 122, 4, 6, 7, 8, 44];

function ehPar(params) {
  return params % 2 === 0;
}

const resultado = numeros.every(ehPar);
const saida = resultado ? "array válido" : "array inválido";

console.log(saida);
