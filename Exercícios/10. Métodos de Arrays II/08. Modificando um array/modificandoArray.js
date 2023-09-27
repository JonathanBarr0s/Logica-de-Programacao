const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const novoArray = frutas.map((fruta, índice) => {
  const primeiraLetraMaiúscula =
    fruta[0].toUpperCase() + fruta.slice(1).toLowerCase();
  return `${índice} - ${primeiraLetraMaiúscula}`;
});

console.log(novoArray);
