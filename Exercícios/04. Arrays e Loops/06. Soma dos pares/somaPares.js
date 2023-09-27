const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let somaPar = 0;

for (let i = 0; i < numeros.length; i++) {
    let ehPar = numeros[i] % 2
    
    if (ehPar == 0) {
        somaPar += numeros[i];
    }
}

console.log(somaPar);