const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const operacao = 'atender'
const paciente = 'Jonathan'
const tamanhoFila = pacientes.length


function sistema (x, y, z) {
    if (y === "agendar") {
        x.splice(tamanhoFila, 0, z)
        console.log(x.join(', '));
    } else if (y === 'atender') {
        x.splice(0, 1)
        console.log(x.join(', '));
    }
}

sistema(pacientes, operacao, paciente)