const texto = "Aprenda programar do zero";
const textoMinusculo = texto.toLowerCase();
let urlAmigavel = textoMinusculo;

while (urlAmigavel !== urlAmigavel.replace(" ", "-")) {
  urlAmigavel = urlAmigavel.replace(" ", "-");
}

console.log(urlAmigavel);
