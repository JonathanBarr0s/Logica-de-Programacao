const alturaEmCm = 205;

let resultado;

if (alturaEmCm < 180) {
    resultado = "REPROVADO"
} else if (alturaEmCm >= 180 && alturaEmCm <= 185) {
    resultado = "LÍBERO"
} else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
    resultado = "PONTEIRO"
} else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
    resultado = "OPOSTO"
} else { resultado = "CENTRAL"
}

console.log(resultado);