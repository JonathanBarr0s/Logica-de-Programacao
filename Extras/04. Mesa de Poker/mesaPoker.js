const min = 2;
const max = 10;
const valores = [0, 5, 6, 10, 11];

//código
let podemJogar = [];

for (let i of valores) {
  if (i >= min && i <= max) {
    podemJogar.push(i);
  }
}

console.log(podemJogar);
