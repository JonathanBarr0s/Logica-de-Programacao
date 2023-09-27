const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

function cidadesAteOitoCaracteres(params) {
    return params.length <= 8
}

console.log(cidades.filter(cidadesAteOitoCaracteres).join(', '));