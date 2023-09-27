const letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];

let errado = 0;

for (palavra of palavras) {

    for (primeiraLetra of palavra) {

        if (primeiraLetra === letra) {
        } else {
            ++errado;
        }

        break

    }

}

console.log(errado);