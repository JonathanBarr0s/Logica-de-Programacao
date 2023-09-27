const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

function apenasPares(params) {
  return params % 2 === 0;
}

console.log(numeros.filter(apenasPares));
