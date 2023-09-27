//valor do produto comprado.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 3;

//valor pago
const valorPago = 1000;

const valorParcela = (valorDoProduto / quantidadeDoParcelamento).toFixed(2);
const parcelasRestantes = (quantidadeDoParcelamento - (valorPago / (valorDoProduto / quantidadeDoParcelamento))).toFixed(0);
const unidadeParcelasRestantes = (parcelasRestantes == 1 ? "parcela" : "parcelas");
const unidade = (parcelasRestantes == 1 ? "Resta" : "Restam");

if (valorPago >= valorDoProduto) {
    console.log("Dívida quitada.");
} else {
    console.log(`${unidade} ${parcelasRestantes} ${unidadeParcelasRestantes} de R$ ${valorParcela}.`);
}