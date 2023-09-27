function processData(input) {
  const lines = input.trim().split("\n");
  const senha = lines[0];
  const senhaembaralhada = lines[1];

  let senhaArray = [];
  let verificacao = [];
  let indice = 0;

  for (let i of senha) {
    senhaArray.push(i);
  }

  for (let j of senhaArray) {
    while (indice !== senhaembaralhada.length) {
      let buscar = senhaembaralhada[indice];
      if (j === buscar) {
        verificacao.push("True");
        indice++;
        break;
      }
      indice++;
    }
  }

  if (verificacao.length === senha.length) {
    console.log("SIM");
  } else {
    console.log("NAO");
  }
}

processData("cubos", "cuggbyos");
