const lista = [2, 3, 4];

//código
let media = 0;

for (let i of lista) {
  media = media + i;
}

media = media / lista.length

console.log(media);