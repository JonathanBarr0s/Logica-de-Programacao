//Caso o usuário esteja na última imagem e clique na direita, ele volta para a primeira.
//Caso o usuário esteja na primeira imagem e clique na esquerda, ele volta para a última.
// 0 e 6


let sequencia = "<>";

const carrossel = [0, 1, 2, 3, 4, 5, 7,];
let imagemAtual = 0;


for (imagem of sequencia) {
    if (imagem === ">") {
        imagemAtual = imagemAtual + 1;
    } 
    if (
        imagemAtual === 7) {
        imagemAtual = 0;
    }
    if (imagem === "<") {
        imagemAtual = imagemAtual - 1;
    } 
    if (
        imagemAtual === -1) {
        imagemAtual = 6;
    }
}

console.log(imagemAtual);
