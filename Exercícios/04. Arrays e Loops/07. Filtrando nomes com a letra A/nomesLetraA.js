const nomes = ["Ana", "Joana", "Carlos", "amanda",];
let nomesLetraA = [];

for (let i of nomes) {

    for (let letra of i) {

        if (
            letra == "A" ||
            letra == 'a'
        ) {
            nomesLetraA[nomesLetraA.length] = i;
            break
        }
        break
    }
}

console.log(nomesLetraA);