# Exercício 12

## cAPS lOCK oN

vOCÊ ESTÁ DESENVOLVENDO UM FORMULÁRIO DE CADASTRO E NOS PRIMEIROS TESTES DE USABILIDADE COM USUÁRIOS REAIS NOTOU ALGO PECULIAR: mUITOS USUÁRIOS PREENCHEM O FORMULÁRIO TODO COM A TECLA cAPS lOCK ATIVA, DEIXANDO TUDO BEM MENOS AGRADÁVEL DE LER. a SOLUÇÃO ESCOLHIDA NO dAILY DO DIA SEGUINTE FOI DE DETECTAR QUANDO O USUÁRIO ESTÁ ESCREVENDO DESSA FORMA E CORRIGIR AUTOMATICAMENTE. vOCÊ DEVE AGORA ESCREVER ESSE ALGORITMO.

cONSIDERAMOS QUE UMA PALAVRA FOI ESCRITA COM cAPS lOCK SE OU TODAS AS SUAS LETRAS FOREM MAIÚSCULAS OU SE A PRIMEIRA FOR MINÚSCULA E TODAS AS OUTRAS MAIÚSCULAS. a CORREÇÃO NESSES CASOS É INVERTER TODAS AS LETRAS.

### Input Format

a ENTRADA CONSISTE DE UMA ÚNICA PALAVRA CONTENDO APENAS LETRAS LATINAS (A-Z), MINÚSCULAS OU MAIÚSCULAS.

### Constraints

uMA PALAVRA POSSUI NO MÁXIMO 100 LETRAS.

### Output Format

iMPRIMA A PALAVRA CORRIGIDA, CASO O ALGORITMO TENHA DETECTADO QUE ELA FOI ESCRITA COM cAPS lOCK ATIVO.

### Sample Input 0

```javascript
cAPS
```

### Sample Output 0

```javascript
Caps
```

### Explanation 0

Ao receber um input com o texto contendo a primeira letra minúscula e o restante da palavra maiúscula devemos retornar o formato inverso, ou seja, a primeira letra maiúscula e o restante da palavra minúscula

### Sample Input 1

```javascript
lock
```

### Sample Output 1

```javascript
lock
```

### Explanation 1

Ao receber um input com o texto minúsculo devemos retornar o texto no mesmo formato

### Sample Input 2

```javascript
CAPS
```

### Sample Output 2

```javascript
caps
```

### Explanation 2

Ao receber um input com o texto todo maiúsculo devemos retornar o texto minúsculo



