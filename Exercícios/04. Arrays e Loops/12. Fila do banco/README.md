# Exercício 12

## Fila do banco

Neste exercício iremos controlar a fila de um banco que tem um limite de pessoas que podem ficar do lado de dentro. Portanto, **enquanto** houver pessoas do lado de fora, e do lado de dentro ainda não tenha atingido o limite permitido, deveremos permitir a entrada.

Para isso, teremos dois arrays, um para controlar a fila do lado de dentro do banco e outro para controlar a fila do lado de fora. Estes serão arrays de strings onde cada elemento é o nome da pessoa que está na fila. Nossos arrays serão chamados de **filaDeDentro** e **filaDeFora**.

O limite de elementos para a **filaDeDentro** deverá ser **5 pessoas**.

Enquanto houver elementos na **filaDeFora** e espaços disponíveis dentro do limite na **filaDeDentro**, deveremos passar o primeiro elemento da **filaDeFora** para a última posição da **filaDeDentro**.

Ao final, imprima todos os elementos da **filaDeDentro** e em seguida imprima todos os elementos da **filaDeFora**

#### Exemplo 1:

Suponha que existam 3 pessoas na fila de dentro e 4 pessoas na fila de fora:

```javascript
const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

// seu codigo aqui
```

Escreve um código que verifique quantas pessoas tem a **filaDeDentro**. Caso o limite de pessoas ainda não tenha sido alcançado ( **5 pessoas**), a primeira pessoa da **filaDeFora** deverá ser inserida no final da **filaDeDentro** até que o limite seja alcançado.

Após a manipulação dos arrays, ambos devem ser mostrados na tela.

No exemplo dado acima, o que deve ser impresso no console ao final do programa é:

```
[ 'Jose', 'Maria', 'Joao', 'Joana', 'Roberta' ]
[ 'Marcos', 'Felipe' ]
```

Inicialmente existiam 3 pessoas na fila de dentro, o que possibilitava que 2 pessoas foram transferidas da **filaDeFora** para a **filaDeDentro**. Como quem estava a frente da **filaDeFora** eram `Joana` e `Roberta`, foram esses os nomes transferidos para o final da **filaDeDentro**

#### Exemplo 2:

Para os arrays abaixo:

```javascript
const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

// seu codigo aqui
```

Deverá ser impresso no console:

```
[ 'Jose', 'Joao', 'Joana', 'Roberta' ]
[ ]
```

Teste também alterando o número de nomes dentro de cada array.

