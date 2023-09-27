# Exercício 13

## Cofre Bugadão

Um novo cofre foi desenvolvido com a mais moderna tecnologia em segurança e criptografia. Na porta do cofre há um teclado com todas as letras do alfabeto em que a pessoa pode digitar a senha predefinida para abrir a porta.

Durante alguns testes de rotina foi descoberto um bug na hora de validar a senha: O cofre ignora letras erradas durante a digitação da senha, desde que todas as letras da senha tenham sido digitadas na ordem correta.

Por exemplo, se a senha for “senha” e for digitado “seggnhya”, o cofre irá abrir.

### Input Format

A entrada consistirá em duas linhas, na primeira linha estará a senha correta, de até S caracteres. Na segunda linha estará a palavra digitada pela pessoa, de até N caracteres.

### Constraints

S ≤ 10^3 N ≤ 10^5

### Output Format

Imprima “SIM” caso o cofre abra. Caso contrário, imprimir “NAO”.

### Sample Input 0

```javascript
senha
seggnhya
```

### Sample Output 0

```javascript
SIM
```

### Sample Input 1

```javascript
senha
ewvelrabsocaeln
```

### Sample Output 1

```javascript
NAO
```


