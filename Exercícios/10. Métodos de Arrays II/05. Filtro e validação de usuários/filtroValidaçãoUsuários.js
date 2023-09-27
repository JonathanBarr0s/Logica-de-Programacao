const usuários = [
  {
    nome: "André",
    idade: 29,
    habilitado: false,
  },
  {
    nome: "Marcos",
    idade: 70,
    habilitado: true,
  },
  {
    nome: "Ana",
    idade: 35,
    habilitado: true,
  },
  {
    nome: "Vinícius",
    idade: 44,
    habilitado: true,
  },
  {
    nome: "Carlos",
    idade: 17,
    habilitado: false,
  },
  {
    nome: "Maria",
    idade: 19,
    habilitado: true,
  },
];

function filtroIdade(params) {
  return params.idade >= 18 && params.idade <= 65;
}
const resultadoFiltro = usuários.filter(filtroIdade);

function temHabilitacao(params) {
  return params.habilitado;
}
const resultadoHabilitacao = resultadoFiltro.every(temHabilitacao);

const saida = resultadoHabilitacao
  ? "todos passaram no teste"
  : "todos precisam estar habilitados";

console.log(saida);
