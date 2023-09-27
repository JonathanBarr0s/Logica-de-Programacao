const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function buscarCarro(x, y) {
    let indice = y + 3;
    let grupo = x.slice(y, indice);
    let imprimir = grupo.join(' - ')
    console.log(imprimir);
}

buscarCarro(nomes, posicao)