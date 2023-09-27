# Exercício 07

## Numerando capítulos de um livro

1. Abaixo, temos a lista de capítulos do livro `O poder do hábito`. Sua tarefa é numerar, **em ordem crescente**, cada capítulo do livro adicionando uma propriedade `numero` em cada objeto da lista de capítulos.

Obs.: a ordem deverá seguir a mesma existente.

```javascript
const livro = {
    nome: 'O poder do hábito',
    capitulos: [
        {
            nome: "O loop do hábito",
        },
        {
            nome: "O cérebro ansioso",
        },
        {
            nome: "A regra de ouro da mudança de hábito",
        },
        {
            nome: "Hábitos angulares, ou a balada de Paul O`neill",
        },
        {
            nome: "Starbucks e o hábito do sucesso",
        },
        {
            nome: "O poder de uma crise",
        },
        {
            nome: "Como a target sabe o que você quer antes que você saiba",
        },
        {
            nome: "A Saddleback Church e o boicote aos ônibus de Montgomery",
        },
        {
            nome: "A neorologia do livre-arbítrio",
        },
    ]
}
```

_Lembre-se que existe uma estrutura de repetição que nos ajuda em questão das posições dos elementos contidos no array. Portanto, o resultado final para o exemplo acima, deverá ser como ilustrado abaixo:_

```javascript
{
    nome: 'O poder do hábito',
    capitulos: [
        {
            numero: 1,
            nome: "O loop do hábito",
        },
        {
            numero: 2,
            nome: "O cérebro ansioso",
        },
        {
            numero: 3,
            nome: "A regra de ouro da mudança de hábito",
        },
        {
            numero: 4,
            nome: "Hábitos angulares, ou a balada de Paul O`neill",
        },
        {
            numero: 5,
            nome: "Starbucks e o hábito do sucesso",
        },
        {
            numero: 6,
            nome: "O poder de uma crise",
        },
        {
            numero: 7,
            nome: "Como a target sabe o que você quer antes que você saiba",
        },
        {
            numero: 8,
            nome: "A Saddleback Church e o boicote aos ônibus de Montgomery",
        },
        {
            numero: 9,
            nome: "A neorologia do livre-arbítrio",
        },
    ]
}
```

Faça o teste com outros exemplos.


