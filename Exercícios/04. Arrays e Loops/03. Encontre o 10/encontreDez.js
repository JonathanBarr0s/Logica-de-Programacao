const numeros = [54, 22, 14, 20, 284, 10];

let elemento = false;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] == 10) {
        console.log(i);
        elemento = true;
    }
}

if (!elemento) {
    console.log(-1);
}