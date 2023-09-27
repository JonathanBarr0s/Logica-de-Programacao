const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const paresForOf = [];
const imparesForOf = [];

const paresWhile = [];
const imparesWhile = [];

const paresFor = [];
const imparesFor = [];

// For of
for (let i of original) {

    let testeParForOf = i % 2

    if (testeParForOf == 0) {
        paresForOf[paresForOf.length] = i;
    } else {
        imparesForOf[imparesForOf.length] = i;
    }
}

console.log("For of par " + paresForOf);
console.log("For of ímpar " + imparesForOf);

// While
let x = 0;
while (x < original.length) {
    
    let testeParWhile = original[x] % 2
    
    if (testeParWhile == 0) {
        paresWhile[paresWhile.length] = original[x];
    } else {
        imparesWhile[imparesWhile.length] = original[x];
    }
    x++;
}

console.log("While par " + paresForOf);
console.log("While ímpar " + imparesForOf);

// For
for (let y = 0; y < original.length; y++) {

    let testeParFor = original[y] % 2

    if (testeParFor == 0) {
        paresFor[paresFor.length] = original[y];
    } else {
        imparesFor[imparesFor.length] = original[y];
    }
}

console.log("For par " + paresFor);
console.log("For ímpar " + imparesFor);