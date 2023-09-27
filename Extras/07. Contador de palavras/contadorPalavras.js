const texto = "Cuidado, pois usuarios as vezes          deixam espacos vazios no fim do texto sem querer ";

// código

let contador = 0;

const textoTrim = texto.trim();
const arrayTexto = textoTrim.split(' ');

for (let i of arrayTexto) {
    if (i === '') {

    } else {
        contador++
    }
}

console.log(contador);
