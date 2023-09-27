const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

console.log(numeros.sort((a, b) => a - b));

console.log(numeros.sort((a, b) => b - a));

console.log(
  frutas.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  })
);

console.log(
  frutas.sort(function (a, b) {
    return b.toLowerCase().localeCompare(a.toLowerCase());
  })
);

console.log(frutas.sort(function(a, b) {
  return a.length - b.length;
}));

