# Exercício 04

## Adicionando maior idade

1. Dado a lista de objetos abaixo, adicione uma nova propriedade chamada `maior_idade` para cada objeto da lista. A propriedade deverá receber um valor booleano de acordo com a propriedade `idade` de cada objeto. Caso a idade seja maior que 17, o valor deve ser `true`, caso contrário `false`.

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

_Lembre-se que podemos percorrer a lista, de modo, que para cada objeto percorrido será atribuída uma nova propriedade, portanto, o resultado final para o exemplo acima, deverá ser como ilustrado abaixo:_

```javascript
[
    {
        "nome": "João",
        "idade": 25,
        "maior_idade": true
    },
    {
        "nome": "Ana",
        "idade": 18,
        "maior_idade": true
    },
    {
        "nome": "Beatriz",
        "idade": 15,
        "maior_idade": false
    },
    {
        "nome": "Carlos",
        "idade": 16,
        "maior_idade": false
    },
    {
        "nome": "Antonio",
        "idade": 32,
        "maior_idade": true
    }
]
```

Faça o teste com outros exemplos.


