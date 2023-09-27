const pessoas = [
  {
    nome: "Antonio",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Ana",
    idade: 21,
    profissao: "Programador",
  },
  {
    nome: "Beatriz",
    idade: 20,
    profissao: "Programador",
  },
  {
    nome: "José",
    idade: 32,
    profissao: "Jornalista",
  },
  {
    nome: "Marcos",
    idade: 30,
    profissao: "Programador",
  },
];

function filtroProgramador(params) {
  return params.profissao === "Programador" && params.idade > 20;
}

const resultadoProgramador = pessoas.filter(filtroProgramador);

function filtroJornalista(params) {
  return params.profissao === "Jornalista" && params.idade > 30;
}

const resultadoJornalista = pessoas.filter(filtroJornalista);

function filtroJornalistaEProgramadores(params) {
  return (
    (params.idade < 30 && params.profissao === "Jornalista") ||
    (params.idade < 30 && params.profissao === "Programador")
  );
}

const resultadoJornalistaProgramador = pessoas.filter(
  filtroJornalistaEProgramadores
);

console.log(resultadoJornalistaProgramador);
