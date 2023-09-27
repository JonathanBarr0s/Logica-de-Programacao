const precos = [150, 50];

//código
let itemMaisBarato = 999999999999999999999999999999;
let soma = 0;
let total = 0;

if (precos.length > 2) {
  for (let i of precos) {
    if (i < itemMaisBarato) {
      soma = soma + i;
      itemMaisBarato = i;
    } else {
      soma = soma + i;
    }
  }

  total = soma - itemMaisBarato * 0.5;
  console.log(total);
} else {
    for (let i of precos) {
        soma = soma + i
    }
    console.log(soma);
}
