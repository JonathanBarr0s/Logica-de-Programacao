const stringCorrompida = "*Canis %lupus )familiaris";
let stringPurificada = "";


for (caractere of stringCorrompida) {
    if (caractere === "!" ||
        caractere === "@" ||
        caractere === "#" ||
        caractere === "$" ||
        caractere === "%" ||
        caractere === "&" ||
        caractere === "*" ||
        caractere === "(" ||
        caractere === ")"
    ) { } else {
        stringPurificada = stringPurificada + caractere;
    }
}

console.log(stringPurificada);