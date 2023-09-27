const jogadores = [
  {
    nome: "Herman",
    jogada: 1,
  },
  {
    nome: "Rhodes",
    jogada: 1,
  },
  {
    nome: "Beach",
    jogada: 1,
  },
  {
    nome: "Laurel",
    jogada: 1,
  },
  {
    nome: "Beatrice",
    jogada: 1,
  },
  {
    nome: "Alison",
    jogada: 1,
  },
  {
    nome: "Saundra",
    jogada: 1,
  },
  {
    nome: "Klein",
    jogada: 1,
  },
];

//código
let quantasVezesZeroAparece = 0;
let quemJogouZero;
let quantasVezesUmAparece = 0;
let quemJogouUm;

for (let i of jogadores) {
  if (i.jogada === 0) {
    quemJogouZero = i.nome;
    quantasVezesZeroAparece++;
  } else if (i.jogada === 1) {
    quemJogouUm = i.nome;
    quantasVezesUmAparece++;
  }
}

if (
  quantasVezesUmAparece === 1 &&
  quantasVezesZeroAparece !== 0 &&
  quantasVezesZeroAparece !== 1
) {
  console.log(quemJogouUm);
} else if (
  quantasVezesZeroAparece === 1 &&
  quantasVezesUmAparece !== 0 &&
  quantasVezesUmAparece !== 1
) {
  console.log(quemJogouZero);
} else {
  console.log("NINGUEM");
}
