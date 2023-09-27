# Exercício 08

## Brazilian Storm

Numa competição de surf, cada manobra de cada atleta é julgada por vários juízes, de modo que cada um deles dá uma nota. Para calcular a nota final da manobra, descarta-se a maior e a menor nota e calcula-se a média aritimética das restantes.

Seu papel é desenvolver a parte do software que calcula a nota final de uma manobra a partir das notas dadas por cada juíz.
  
### Input Format

A entrada do problema será sempre um array de números chamado notas, que contém as notas dadas por cada um dos juízes.

### Output Format

Você deve imprimir na tela a nota final da manobra, que é a média das notas que não foram descartadas.

### Sample Input 0

```javascript
100 100 100 20 50 30 14 100 100 100
```
### Sample Output 0

```javascript
75
```
### Explanation 0

Uma nota 100 e uma 14 são descartadas. A média das restantes é 75.

### Sample Input 1

```javascript
100 100 100 50
```
### Sample Output 1

```javascript
100
```
### Explanation 1

Uma nota 100 e uma 50 são descartadas, sobrando duas notas 100. A média dessas duas notas é, naturalmente, 100.
