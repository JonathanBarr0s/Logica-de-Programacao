# Exercício 13

## Compra com Desconto

A Loja do Juninho está com uma super promoção. E na compra de qualquer produto você ganha desconto conforme a forma de pagamento seguindo a tabela seguinte.

| Forma de Pagamento | Desconto |
| ------------------ | -------- |
| credito            | 5%       |
| cheque             | 3%       |
| debito ou dinheiro | 10%      |

**a)** Faça um programa que verifica o tipo de desconto, calcule o valor do produto com o desconto e imprima o resultado. O valor final do produto após o desconto pode ser encontrado com a fórmula:

$$ valorFinal = valorDoProduto - (valorDoProduto \* desconto)$$

Lembre-se de cuidar para que o valor monetário tenha sempre duas casas decimais, apenas.

```javascript
//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
```

Para o exemplo acima, o valor final é:

$$ valorFinal = 13000 - (13000\*0.05)$$

$$ valorFinal = 12350$$

O programa deve exibir na tela:

```
Valor a ser pago: R$123.50
```

Teste seu programa para outras entradas.


