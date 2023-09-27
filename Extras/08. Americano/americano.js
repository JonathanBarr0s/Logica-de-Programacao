const numeros = [1, 1, 1];

//código
let soma = 0;
let contagem = 1;
let posicao = 1;
let numeroJogadoresTime = numeros.length;

for (let i of numeros) {
  soma = soma + i;
}

while (soma !== contagem) {
  if (posicao === numeroJogadoresTime) {
    posicao = 1;
    contagem++;
  } else {
    posicao++;
    contagem++;
  }
}

console.log(posicao);
