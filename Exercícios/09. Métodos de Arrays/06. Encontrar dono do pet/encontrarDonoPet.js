const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

const pet = 'Paçoca'
let donoEncontrado = false

function encontrarPet(x, y) {
    for (let i of x) {
        for (let j of i.pets) {
            if (j === pet) {
                console.log(`O dono(a) do(a) ${pet} é o(a) ${i.nome}.`);
                donoEncontrado = true
            }
        }
    }
    if (donoEncontrado === false) {
        console.log(`Que pena ${pet}, não encontramos seu dono(a).`);
    }
}

encontrarPet(usuarios, pet)