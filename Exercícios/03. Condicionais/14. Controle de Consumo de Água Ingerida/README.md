# Exercício 14

## Controle de Consumo de Água Ingerida

Crie um programa que possa determinar se uma pessoa está consumindo a quantidade diária necessária de água:

A tabela abaixo informa o risco de complicações na saúde com base na injestão diária de água.

| Quantidade (litros) | Risco    | Mensagem                                                                |
| ------------------- | -------- | ----------------------------------------------------------------------- |
| Menos de 1.5        | ALTO     | Risco Alto - Você está ingerindo pouquissima água, beba mais água!      |
| De 1.5 a 3          | MODERADO | Risco Moderado - Você está ingerindo pouca água, beba mais!             |
| Mais de 3           | BAIXO    | Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns! |

**a)** Faça um programa que verifica a quantidade de água ingerida e imprima a mensagem com o diagnóstico conforme na tabela acima.

```javascript
//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;
```

Para o exemplo acima, o programa deve imprimir a mensagem:

```
Risco Moderado - Você está ingerindo pouca água, beba mais!
```

Teste seu programa para outras entradas.

