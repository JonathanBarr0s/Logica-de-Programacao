# Exercício 06

## Brasil com "P"

Brasil com "P" é uma música bastante famosa, em que todas as palavras da música inteira começam com a letra "P".

GOG, o compositor desta música, decidiu dar um próximo passo nesse estilo e fazer músicas em que todas as palavras comecem sempre com as mesmas duas primeiras letras. Contudo ele ainda não decidiu quais duas primeiras letras serão essas. Como está com um pequeno bloqueio no seu processo criativo ele decidiu analisar várias combinações e analisar as palavras que surgem para cada par de letras, e escolher o par a depender das palavras que surjam.

Como apenas olhar no dicionário estava sendo bastante lento e entediante, ele te contratou para fazer um programa que, dado um par de letras qualquer, imprima na tela as palavras que começam com essas duas primeiras letras.
  
### Input Format

A entrada será sempre composta por três variáveis:

- palavras: que será sempre um array de strings, contendo palavras que servem como base para a sua busca. As palavras sao sempre com todas as letras minusculas e sem acentos
- primeiraLetra: que será sempre um string contendo apenas um caractere (minúsculo), que deve ser a primeira letra das palavras
- segundaLetra: que será sempre um string contendo apenas um caractere (minúsculo), que deve ser a segunda letra das palavras

### Output Format

Você deve imprimir na tela as palavras contidas no array de palavras que tem como primeira letra a primeiraLetra fornecida na entrada e a segunda letra a segundaLetra fornecida na entrada. Imprima uma palavra em cada linha.

Caso não nenhuma palavra do array de palavras atenda aos requisitos, imprima na tela NENHUMA.

### Sample Input 0

```javascript
{
  "primeiraLetra": "c",
  "segundaLetra": "v",
  "palavras": [
    "aveia",
    "manha",
    "ave"
  ]
}
```
### Sample Output 0

```javascript
NENHUMA
```
### Sample Input 1

```javascript
{
  "primeiraLetra": "a",
  "segundaLetra": "v",
  "palavras": [
    "aveia",
    "manha",
    "ave"
  ]
}
```
### Sample Output 1

```javascript
aveia
ave
```
