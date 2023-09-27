const numeros = [8, 11, 4, 1];

let maior = 0;
let menor = numeros[0]

for (let i of numeros) {

    if (i > maior) {
        maior = i;
    }

    if ( i < menor) {
        menor = i;
    }
}

console.log(maior - menor);