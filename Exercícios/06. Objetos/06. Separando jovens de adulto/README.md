# Exercício 06

## Separando jovens de adultos

1. Dado a lista de usuários abaixo, separe os usuários que possuem menos de 18 anos dos demais. Para isso, você deverá criar duas novas constantes `jovens` e `adultos`. Todos os usuários menores de 18 anos devem ser inseridos na constante `jovens` e os demais na constante `adultos`.

```javascript
const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
```

_Lembre-se de exibir no console as duas constantes, o resultado final para o exemplo acima, deverá ser como ilustrado abaixo:_

```javascript
const jovens = [
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    }
]
```

```javascript
const adultos = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Antonio",
        idade: 32,
    }
]
```

Faça o teste com outros exemplos.


