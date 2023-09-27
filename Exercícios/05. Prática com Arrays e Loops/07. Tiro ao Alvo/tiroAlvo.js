// Para que o competidor seja aprovado para a próxima fase, ele precisa ter pelo menos 3 disparos com pontuação acima de 70 pontos.
const disparos = [0, 50, 90,];

const sucesso = [];

for (i of disparos) {
    if (i > 70) {
        sucesso[sucesso.length] = i;
    }
}

if (sucesso.length < 3) {
    console.log("ELIMINADO");
} else {console.log(sucesso.length);}

