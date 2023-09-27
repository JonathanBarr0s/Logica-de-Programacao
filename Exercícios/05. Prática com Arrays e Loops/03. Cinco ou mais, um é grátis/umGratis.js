const precos = [100, 100, 100, 50,];
let menor = precos[0];
let total = 0;

if (precos.length >= 5) {

for (item of precos) {

    if (item < menor) {

        menor = item

    }

}

for (unidade of precos) {

    total = total + unidade;

}

console.log(total - menor);

} else { 

    for (produto of precos) {
        total = total + produto
    }

    console.log(total);

}