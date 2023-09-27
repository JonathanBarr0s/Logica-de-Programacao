# Exercício 08

## Meus pets

1. Abaixo, temos uma lista de pessoas. Cada pessoa possui uma lista com **um**, **vários** ou **nenhum** pet. Percorra cada pessoa da lista e imprima uma mensagem de acordo com as condições a seguir:

a. Se a pessoa não tiver pets, a mensagem deve ser: `Sou João e não tenho pets`.

b. Se a pessoa tiver mais de um pet, a mensagem deve ser: `Sou Ana e tenho 2 pets`.

c. Se a pessoa tiver um pet, a mensagem deve ser: `Sou Beatriz e tenho 1 pet`.

```javascript
const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
```

Obs.: O nome da pessoa e a quantidade de pets deve ser dinâmico, de acordo com as informações de cada objeto.

_Dica: a desestruturação pode facilitar a escrita do código, além de torná-lo mais legível._

_Portanto, o resultado final para o exemplo acima deverá ser como ilustrado abaixo:_

```javascript
`Sou João e não tenho pets`
`Sou Ana e tenho 2 pets`
`Sou Beatriz e tenho 1 pet`
`Sou Carlos e tenho 3 pets`
`Sou Antônio e tenho 1 pet`
```

Faça o teste com outros exemplos.


