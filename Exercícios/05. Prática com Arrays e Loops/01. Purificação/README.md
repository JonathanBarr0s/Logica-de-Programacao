# Exercício 01

## Purificação

Você e seus amigos estavam fazendo um projeto da faculdade e encontraram um banco de dados com nomes científicos de animais que poderia ajudá-los, porém os dados estavam corrompidos.

O seu dever é criar um script para purificar esses dados e utilizá-los em seu trabalho.

A purificação consiste em retirar os caracteres especiais contidos no nome como exemplificado abaixo:

<br>

  <div align="center">
  <table border=1>
            <tr>
                <th>Dado corrompido</th>
                <th>Dado purificado</th>
            </tr>
            <tr>
                <td>*Canis %lupus )familiaris</td>
                <td>Canis lupus familiaris</a></td>
            </tr>
            <tr>
                <td>Felis) silvestris *catus&</td>
                <td>Felis silvestris catus</td>
            </tr>
            <tr>
                <td>$Ailuropoda@ melanoleuca!</td>
                <td>Ailuropoda melanoleuca</td>
            </tr>
        </table>  		

<div align="Left">
  
### Input Format

A entrada será sempre uma string representando um nome corrompido com alguns dos seguintes caracteres !@#$%&*().

### Output Format

A saída deverá ser sempre uma string representando o nome purificado sem os seguinte caracteres especiais !@#$%&*().

### Sample Input 0

```javascript
*Canis %lupus )familiaris
```
### Sample Output 0

```javascript
Canis lupus familiaris
```
