const ladoA = 3;
const ladoB = 3;

let resultado

if (ladoA != ladoB) {
    resultado = "NÃO";
} else if (
    (ladoA && ladoB == "0")
) {
    resultado = "Bucha de branco"
} else if (
    (ladoA && ladoB == "1")
) {
    resultado = "Bucha de Ás"
} else if (
    (ladoA && ladoB == "2")
) {
    resultado = "Bucha de Duque"
} else if (
    (ladoA && ladoB == "3")
) {
    resultado = "Bucha de Terno"
} else if (
    (ladoA && ladoB == "4")
) {
    resultado = "Bucha de Quadra"
} else if (
    (ladoA && ladoB == "5")
) {
    resultado = "Bucha de Quina"
} else if (
    (ladoA && ladoB == "6")
) {
    resultado = "Bucha de sena"
}

console.log(resultado);