# Exercício 04

## Sistema de formatação de dados do formulário

Quando o formulário do sistema de uma empresa é submetido, o sistema cria um objeto com as informações da seguinte forma:

```javascript=
let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
```

Antes de salvar as informações, precisamos formatar os dados seguindo as seguintes exigências:

-   O padrão do identificador são seis dígitos e caso o número não possua essa quantidade, complete com zero a esquerda;
-   O nome e sobrenome precisam sempre começar com letra maiúscula;
-   O e-mail não pode ter espaços em branco;

Para testar, use o `console.log()` para imprimir cada propriedade do objeto formatado.

Exemplo 1:

```javascript=
console.log(identificador);
```

Para o exemplo acima o sistema deverá imprimir:

```
000123
```

Exemplo 2:

```javascript=
console.log(nome);
```

Para o exemplo acima o sistema deverá imprimir:

```
José Silva Costa
```

Exemplo 3:

```javascript=
console.log(email);
```

Para o exemplo acima o sistema deverá imprimir:

```
jose@email.com
```

Faça o teste com outros exemplos.


