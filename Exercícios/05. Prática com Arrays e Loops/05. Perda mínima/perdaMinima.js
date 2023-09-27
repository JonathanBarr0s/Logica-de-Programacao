const precos = [5, 10, 3];

let menorPrejuizo = 9999999999999999999999;

for (let i = 0; i < precos.length; i++) {

    for (let j = i + 1; j < precos.length; j++) {

        const compra = precos[i];
        const venda = precos[j];
        const prejuizo = compra - venda;

        if (prejuizo > 0) {
            if (prejuizo < menorPrejuizo) {

                menorPrejuizo = prejuizo;
            }
        }
    }   
}

console.log(menorPrejuizo);