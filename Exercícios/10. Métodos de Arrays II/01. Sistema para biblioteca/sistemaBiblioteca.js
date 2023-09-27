const livros = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];
const nomeDoLivro = "Dom Quixote";

function livrosfindIndex(livro) {
  return livro === nomeDoLivro;
}

const resultado = livros.findIndex(livrosfindIndex);

console.log(`O livro está na posição ${resultado + 1}`);
