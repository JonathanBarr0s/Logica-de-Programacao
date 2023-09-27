const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];
const bebidasProibidas = ["cerveja", "vodka"];

function bebidaProibida(bebida) {
  return bebidasProibidas.includes(bebida);
}

const resultado = palavras.some(bebidaProibida);

console.log(resultado);
