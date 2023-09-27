const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

function buscarPalavra(palavra) {
  return palavra.length > 5;
}

const resultado = palavras.some(buscarPalavra);
const retorno = resultado ? "existe palavra inválida" : "array validado";

console.log(retorno);
