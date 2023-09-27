# Exercício 05

## Perda mínima

Letícia tem um gráfico de preços projetados para uma casa nos próximos anos. Ela deve comprar a casa em um ano e vendê-la em outro, e deve fazê-lo com prejuízo. Ela quer minimizar suas perdas financeiras.

Por exemplo, a casa é avaliada em **preço = [20, 15, 8, 2, 12]** nos próximos 5 anos. Ela pode comprar a casa em qualquer ano, mas deve revendê-la com prejuízo em um dos anos seguintes. Sua perda mínima seria incorrida comprando no 2º ano em **preço[1] = 15** e revendendo no 5º ano em **preço[4] = 12**.

Encontre e imprima a quantidade mínima de dinheiro que Letícia deve perder se comprar a casa e revendê-la nos próximos anos.
  
### Input Format

A entrada será sempre um array de inteiros de tamanho variado contendo o preço da casa nos próximos anos.

### Output Format

A saída sempre será um inteiro representando a perda mínima que Letícia terá.

### Sample Input 0

```javascript
5 10 3
```
### Sample Output 0

```javascript
2
```
### Explanation 0

Letícia compra a casa no 1º ano em **preço = 5** e revende no 3º ano em **preço = 3** resultando em uma perda de **5 - 3 = 2**.

### Sample Input 1

```javascript
30 10 54 76 1 4 35
```
### Sample Output 1

```javascript
6
```
### Explanation 1

Letícia compra a casa no 2º ano em **preço = 10** e revende no 6º ano em **preço = 4** resultando em uma perca de **10 - 4 = 6**.
