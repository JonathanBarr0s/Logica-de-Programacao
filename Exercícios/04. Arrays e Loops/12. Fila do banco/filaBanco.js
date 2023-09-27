const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

for (let i of filaDeDentro) {

    if (filaDeDentro.length < 5 && filaDeFora != 0) {
        filaDeDentro[filaDeDentro.length] = filaDeFora[0];
        filaDeFora.shift();
    }
}

console.log(filaDeDentro);
console.log(filaDeFora);