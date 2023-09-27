const aposentada = true;
const portadoraDeDoenca = true;
const totalDeRendimentos = 2855972;

//QUANDO PAGA
// const aposentada = false;
// const portadoraDeDoenca = false;
// const totalDeRendimentos >= 2855971;

if (aposentada || portadoraDeDoenca) {
    console.log("ISENTA");
} else if (
    totalDeRendimentos <= 2855971
) {
    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");
} else {
    console.log("PEGA LEAO");
}
