const cpf = "011.022.033-44";
let cpfCorrigido = "";

cpfCorrigido = cpf.replace(".", "")
cpfCorrigido = cpfCorrigido.replace(".", "")
cpfCorrigido = cpfCorrigido.replace("-", "")

console.log(cpfCorrigido);