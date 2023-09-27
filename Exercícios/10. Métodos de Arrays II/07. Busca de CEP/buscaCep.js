const cep = 00222444;

const endereços = [
  { cep: 00111222, rua: "Rua dos Artistas" },
  { cep: 00111333, rua: "Rua Augusta" },
  { cep: 00222444, rua: "Avenida Paralela" },
  { cep: 11222333, rua: "Rua Carlos Gomes" },
];

function nomeRua(cepProcurado) {
  const endereçoEncontrado = endereços.find(endereço => endereço.cep === cepProcurado);
  return endereçoEncontrado ? endereçoEncontrado.rua : "CEP não encontrado";
}

const resultado = nomeRua(cep);

console.log(resultado);
