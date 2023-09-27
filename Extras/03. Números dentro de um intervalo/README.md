# Exercício 03

## Números dentro de um intervalo

Jacqueline e Emanuel acabaram de sair da aulas desesperados pela quantidade de exercícios de matemática que a professora Raissa passou como dever de casa. Para a sorte deles, você sabe programação e vai criar um programa pra ajudá-los a resolver todos os problemas do assunto *intervalos* entre dois números.

Eles pediram, então, para que você crie um programa que consiga fazer a prova-real de todos os exercícios da professora Raissa.

Seu objetivo é:

- Implementar uma função que receba três argumentos: numero, limiteInferior e limiteSuperior;

- Essa função deve retornar se esse número pertence ao conjunto que é limitado pelo **limiteInferior** e **limiteSuperior**

Pertencer ao conjunto significa que dado o **numero**, ele deve ser maior ou igual que o **limiteInferior** e menor ou igual do que o **limiteSuperior**.

### Input Format

A entrada consista de três parâmetros: numero, limiteInferior e limiteSuperior.

**numero** refere-se ao número desejado para saber se ele está dentro ou não do limite. **limiteInferior** refere-se ao menor valor do limite de um dado intervalo; **limiteSuperior** refere-se ao maior valor do limite de um dado intervalo;

### Constraints

- Quaisquer números inteiros;

- **limiteInferior** menor ou igual ao **limiteSuperior**;

### Output Format

Imprima uma das duas opções abaixo:

- **PERTENCE** - para quando um número pertence ao limite delimitado;

- **NAO PERTENCE** - para quando um número **não** pertence ao limite delimitado;

### Sample Input 0

```javascript
10 5 20
```

### Sample Output 0

```javascript
PERTENCE
```

### Explanation 0

- O primeiro valor refere-se ao valor que deseja-se saber é pertercente ao intervalo;

- O segundo e terceiro valor refere-se ao intervalo.


