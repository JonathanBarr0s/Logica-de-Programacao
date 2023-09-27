const nome = 'Guido Cerqueira';

const nomeMinusculo = nome.toLowerCase();
let nomeSemEspaco = nomeMinusculo;
let limitandoCaracter = nomeSemEspaco


while (nomeSemEspaco.replace(' ','') !== nomeSemEspaco) {
    nomeSemEspaco = nomeSemEspaco.replace(' ','')
}

limitandoCaracter = '@' + nomeSemEspaco.slice(0, 12)

console.log(limitandoCaracter);