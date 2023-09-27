const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 60;

/* 
Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). 
Se for igual a 18 mil reais, o aluno não deve pagar mais nada,
pois já quitou a dívida.
*/
const totalJaPagoPeloAluno = 1800000;

const valorParcela = (rendaMensalEmCentavos * 0.18) / 100

if (rendaMensalEmCentavos < 200000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} else if (mesesDecorridos > 60) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois o prazo de 60 meses para quitar a dívida venceu.");
} else if (totalJaPagoPeloAluno >= 1800000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a dívida foi quitada.");
} else {
    console.log(`O valor da parcela desse mês é de R$ ${valorParcela} reais.`);
}