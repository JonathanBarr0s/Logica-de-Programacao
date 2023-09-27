const resultados = ["V", "E", "V", "E"];

const venceu = 3;
const empatou = 1;
const perdeu = 0;

let pontos = 0;

for (i of resultados){
    if (i === "V") {
        pontos = pontos + venceu;
    } else if (i === "E") {
        pontos = pontos + empatou;
    }
}

console.log(pontos);