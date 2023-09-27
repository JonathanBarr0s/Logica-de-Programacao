const numeroCartao = '1111222233334444';

let cartaoCensurado = numeroCartao.slice(0, 4) + ''.padStart(8, "*") + numeroCartao.slice(12, 16);

console.log(cartaoCensurado);