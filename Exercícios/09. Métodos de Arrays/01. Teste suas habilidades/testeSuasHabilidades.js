const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
const frutasInvertido = frutas.reverse();
const frutasOriginal = frutasInvertido.reverse();

frutasOriginal.splice(0, 1);
frutasOriginal.splice(3, 1, 'Melão');

console.log(frutasOriginal);