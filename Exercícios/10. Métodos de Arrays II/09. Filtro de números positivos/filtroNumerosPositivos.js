const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

function numerosPositivos(params) {
  return params > 0;
}

const resultado = numeros.filter(numerosPositivos);

console.log(resultado);
