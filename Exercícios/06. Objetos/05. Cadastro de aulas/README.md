# Exercício 05

## Cadastro de aulas

1. Um novo curso foi criado e suas aulas precisam ser cadastradas. Abaixo temos o objeto `curso`, que possui uma propriedade chamada `aulas`. Sua tarefa é adicionar a lista de aulas abaixo na propriedade `aulas` do objeto `curso`.

```javascript
const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}
```

### Lista de aulas

-   Aula 01

    -   Identificador = 01
    -   Nome da aula = Introdução a programação

-   Aula 02

    -   Identificador = 02
    -   Nome da aula = Variáveis

-   Aula 03

    -   Identificador = 03
    -   Nome da aula = Condicionais

-   Aula 04
    -   Identificador = 04
    -   Nome da aula = Arrays

_Lembre-se que após adicionar elementos no array `aulas, o resultado final para o exemplo acima deverá ser como ilustrado abaixo:_

```javascript
{
    id: 1234,
    nome: "Lógica de programação",
    aulas: [
        {
            identificador: 1,
            nome_da_aula: "Introdução a programação"
        },
        {
            identificador: 2,
            nome_da_aula: "Variáveis"
        },
        {
            identificador: 3,
            nome_da_aula: "Condicionais"
        },
        {
            identificador: 4,
            nome_da_aula: "Arrays"
        }
    ],
}
```

Faça o teste com outros exemplos.


