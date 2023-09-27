let min = 25; //10
let km = 11.5; //20

//código
let valorMin = 0;
let valorkm = 0;
let total = 0;

if (min > 20) {
    min = min - 20
    valorMin = 20 * 50
    valorMin = valorMin + (min * 30)
} else {
    valorMin = min * 50
}

if (km > 10) {
    km = km - 10
    valorkm = 10 * 70
    valorkm = valorkm + (km * 50)
} else {
    valorkm = km * 70
}

total = valorMin + valorkm

console.log(total);