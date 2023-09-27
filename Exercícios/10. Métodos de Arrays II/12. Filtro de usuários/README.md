# Exercício 12

## Filtro de usuários

Analise o array abaixo e faça um sistema que atenda os requisitos abaixo.

```javascript
const pessoas = [
  {
    nome: "Antonio",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Ana",
    idade: 21,
    profissao: "Programador",
  },
  {
    nome: "Beatriz",
    idade: 20,
    profissao: "Programador",
  },
  {
    nome: "José",
    idade: 32,
    profissao: "Jornalista",
  },
  {
    nome: "Marcos",
    idade: 30,
    profissao: "Programador",
  },
];
```

Filtre o array e retorne apenas os/as `programadores e programadoras` que sejam maiores de `20 anos`;

Para o requisito acima, o resultado deve ser:

```
[
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
]
```

Filtre o array e retorne apenas os/as `jornalistas` que tenha mais de `30 anos`;

Para o requisito acima, o resultado deve ser:

```
[
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    }
]
```

Filtre o array e retorne os/as `jornalistas` e `programadores e programadoras` que sejam jovens. Sabendo que, segundo o IBGE, é considerado jovem aquele que tem até `29 anos`;

Para o requisito acima, o resultado deve ser:

```
[
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    }
]
```

Faça o teste com outros exemplos.


