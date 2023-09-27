//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 10000;

const credito = 0.05;
const cheque = 0.03;
const debitoOuDinheiro = 0.1;

let valorFinal

if (tipoDePagamento == "credito") {
    valorFinal = valorDoProduto - (valorDoProduto * credito)
    console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`);
} else if (tipoDePagamento == "cheque") {
    valorFinal = valorDoProduto - (valorDoProduto * cheque)
    console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`);
} else if (tipoDePagamento == "dinheiro" || tipoDePagamento == "debito") {
    valorFinal = valorDoProduto - (valorDoProduto * debitoOuDinheiro)
    console.log(`Valor a ser pago: R$ ${valorFinal.toFixed(2)}`);
}