const notas = [100, 100, 100, 50];
// Para calcular a nota final da manobra, descarta-se a maior e a menor nota e calcula-se a média aritimética das restantes.

let notaMaior = 0;
let notaMenor = 999999999999999999999999;
let nota = 0;

for (i of notas) {
    nota = nota + i;
    if (i > notaMaior) {
        notaMaior = i;
    }
    if (i < notaMenor) {
        notaMenor = i
    }
}

console.log((nota-notaMaior-notaMenor)/(notas.length-2));