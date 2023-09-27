const numeros = [3, 4, 1, 8, 11, 7, 5];
let maior = 0;

for ( let i of numeros) {
    if (i > maior) {
        maior = i;
    }
}

console.log(maior);