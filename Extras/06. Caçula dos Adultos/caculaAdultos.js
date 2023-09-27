const lista = [20, 18, 18];

//código

let maisJovem = 9999999999999;

for (const i of lista) {
  if (i >= 18 && i < maisJovem) {
    maisJovem = i;
  }
}

if (maisJovem === 9999999999999) {
  console.log("CRESCA E APARECA");
} else {
  console.log(maisJovem);
}
