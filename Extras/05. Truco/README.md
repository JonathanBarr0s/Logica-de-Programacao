# Exercício 05

## Truco

O jogo de truco é muito popular pelo Brasil. Numa de suas versões, ele é jogado apenas com as cartas Q J K A 2 3. Elas tem essa ordem de "força" nesse jogo, sendo 3 a mais valiosa e Q a menos valiosa. Contudo, a cada partida é virada uma carta com a face pra cima na mesa. Esta carta serve para indicar que a próxima carta é a manilha, ou seja, a carta mais poderosa para essa partida. Fizemos uma tabela resumo para explicar essa mecânica:

<br>

  <div align="center">
  <table border=1>
            <tr>
                <th>Carta virada pra cima</th>
                <th>Manilha</th>
            </tr>
            <tr>
                <td align="center">Q</td>
                <td align="center">J</a></td>
            </tr>
            <tr>
                <td align="center">J</td>
                <td align="center">K</td>
            </tr>
            <tr>
                <td align="center">K</td>
                <td align="center">A</td>
            </tr>
            <tr>
                <td align="center">A</td>
                <td align="center">2</td>
            </tr>
            <tr>
                <td align="center">2</td>
                <td align="center">3</td>
            </tr>
            <tr>
                <td align="center">3</td>
                <td align="center">Q</td>
            </tr>
        </table>

<div align="Left">

Supondo que a carta virada pra cima dessa rodada seja um ás (A), a manilha será 2, isso significa que 2 é a carta mais forte dessa rodada.

Faça um programa que diga qual é a manilha, dada uma carta virada para cima.

### Input Format

A entrada é um string armazenado na variável cartaParaCima que indica qual carta ficou virada para cima. Será sempre uma das opções: Q, J, K, A, 2, 3.

### Constraints

--

### Output Format

Imprima na tela qual é a manilha desta partida. Sua resposta deve ser sempre uma das opções: Q, J, K, A, 2, 3.

### Sample Input 0

```javascript
Q
```

### Sample Output 0

```javascript
J
```


