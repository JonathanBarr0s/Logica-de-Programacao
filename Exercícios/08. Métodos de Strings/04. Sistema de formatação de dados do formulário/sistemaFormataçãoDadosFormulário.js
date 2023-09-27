let identificador = "123";
identificador = identificador.padStart(6, "0");

let nome = "José silva costa";
let email = "      jose@email.com  ";

const nomeArray = nome.split(' ');
let nomeFormatado = "";

for (let i of nomeArray) {
    let primeiraLetra = i.slice(0, 1);
    let restanteDoNome = i.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";
}

nome = nomeFormatado;

emailFormatado = email.trim();
email = emailFormatado;

console.log(identificador);
console.log(nome);
console.log(email);