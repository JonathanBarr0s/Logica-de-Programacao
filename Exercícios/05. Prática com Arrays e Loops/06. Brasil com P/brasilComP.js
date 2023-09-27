const palavras = ["aveia", "manha", "ave"];
const primeiraLetra = "c";
const segundaLetra = "m";


let identificador = false


for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];

    if (
        palavra.length >= 2 &&
        palavra[0] === primeiraLetra &&
        palavra[1] === segundaLetra
    ) {
        console.log(palavra);
        identificador = true
    }
}

if (!identificador) {
    console.log("NENHUMA");
}

