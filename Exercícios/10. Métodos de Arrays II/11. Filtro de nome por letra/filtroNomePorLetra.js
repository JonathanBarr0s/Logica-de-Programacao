const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];

const letra = "A";

function filtro(params) {
  return params[0] === letra.toUpperCase() || params[0] === letra.toLowerCase();
}

console.log(nomes.filter(filtro));
