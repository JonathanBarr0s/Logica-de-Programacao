const letras = ["A", "a", "B", "C", "L", "z"];

//Usando While
let whilei = 0;
let letraEWhile = 0;

while (whilei < letras.length) {
    if (
        letras[whilei] == "E" ||
        letras[whilei] == "e"
    ) {
        letraEWhile++;
    }
    whilei++;
}

if (letraEWhile == 0) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
} else {
    console.log(`Foram encontradas ${letraEWhile} letras "E" ou "e".`);
}

//Usando For
let letraEFor = 0;

for (let i = 0; i < letras.length; i++) {
    if (
        letras[i] == "E" ||
        letras[i] == "e"
    ) {
        letraEFor++
    }
}

if (letraEFor == 0) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
} else {
    console.log(`Foram encontradas ${letraEFor} letras "E" ou "e".`);
}

//Usando For of
let letraEForOf = 0;

for (let x of letras) {
    if (
        x == "E" ||
        x == "e"
    ) {
        letraEForOf++;
    }
}

if (letraEForOf == 0) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`);
} else {
    console.log(`Foram encontradas ${letraEForOf} letras "E" ou "e".`);
}