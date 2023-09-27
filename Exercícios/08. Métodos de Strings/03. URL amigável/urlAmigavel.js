const texto = "Aprenda programar do zero na Cubos Academy";
const textoMinusculo = texto.toLowerCase();
let urlAmigavel = textoMinusculo;

while (urlAmigavel !== urlAmigavel.replace(' ','-')) {
    urlAmigavel = urlAmigavel.replace(' ','-')
}

console.log(urlAmigavel);