const celular = 99918888;
const celularString = String(celular);
const identificadorNumero = celularString.indexOf("", 50)

if (identificadorNumero === 10) {
    console.log('(' + celularString.slice(0, 2) + ') 9 ' + celularString.slice(2, 6) + '-' + celularString.slice(6, 10))
} else if (identificadorNumero === 8) {
    console.log('9 ' + celularString.slice(0, 4) + '-' + celularString.slice(4, 8));
}