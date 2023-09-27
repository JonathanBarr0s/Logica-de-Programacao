# Exercício 07

## Validação de e-mail

Faça um sistema que verifique se um e-mail é válido

Dicas:

-   Sempre tem que ter @
-   Sempre tem que ter pelo menos um .
-   Nunca pode começar com .
-   Nunca pode terminar com .

| Entrada                      | Saída           |
| ---------------------------- | --------------- |
| `jose@hotmail.outlook`         | E-mail válido   |
| `jose@hotmail.outlook.br`      | E-mail válido   |
| `jose.messias@hotmail.outlook` | E-mail válido   |
| `jose.messias@hotmail.io`      | E-mail válido   |
| `jose@hotmail`                 | E-mail inválido |
| `jose.messias@hotmail`         | E-mail válido   |
| `jose.messias@.`             | E-mail inválido |
| `jose.@hotmail`                | E-mail válido   |
| `.@`                         | E-mail inválido |
| `@.`                         | E-mail inválido |
| `jose.messias@hotmail.`        | E-mail inválido |
| `.messias@hotmail.`            | E-mail inválido |
| `.messias@hotmail`             | E-mail inválido |

Faça o teste com outros exemplos.


