const disjuntores = [ false, true, true, false, false, true, false, false, true, true,];

let posicao = 0;

for (let i of disjuntores) {

    if (i) {
        console.log(posicao);
    }
    ++posicao;
}