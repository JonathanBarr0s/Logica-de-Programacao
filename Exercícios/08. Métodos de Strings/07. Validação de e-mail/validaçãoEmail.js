const email = 'jose@hotmail.outlook';

let temArroba = false;
let temPonto = false;
let comecaComPonto = false;
let terminaComPonto = false;
let ultimoCaracter = email.length - 1

for (let i of email) {
    if (i === '@') {
        temArroba = true
    } else if (i === '.') {
        temPonto = true
    }
}

if (email.slice(0, 1) === '.') {
    comecaComPonto = true
} else if (email.slice(ultimoCaracter) === '.') {
    terminaComPonto = true
}

if (temArroba &&
    temPonto &&
    !comecaComPonto &&
    !terminaComPonto
) {
    console.log('E-mail válido');
} else {
    console.log('E-mail inválido');
}

