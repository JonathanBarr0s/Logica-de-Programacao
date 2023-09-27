const palavra = "abelha";
const palpite = "a";

let pontos = 0;

for (i of palavra) {
    if (i === palpite) {
        pontos = pontos + 1;
    }
}

console.log(pontos);