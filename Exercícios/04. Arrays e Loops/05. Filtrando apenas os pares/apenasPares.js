const original = [1, 4, 12, 21, 53, 88, 112];
const pares = [];

for (let i = 0; i < original.length; i++) {
    let ehpar = original[i] % 2

    if (ehpar == 0) {
        pares[pares.length] = original[i]
    }
}

console.log(pares);