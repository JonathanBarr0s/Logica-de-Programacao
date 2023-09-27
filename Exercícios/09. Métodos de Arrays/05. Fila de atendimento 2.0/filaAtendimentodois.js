const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const paciente = 'João';
const pacienteCancelado = 'Jonathan';
const finalFila = pacientes.length

function agendarPaciente (x, y) {
    x.splice(finalFila, 0, y)
    console.log(x.join(', '));
}

function atenderPaciente (x) {
    x.splice(0, 1)
    console.log(x.join(', '));
}

function cancelarAtendimento (x, y) {
    let indice = x.indexOf(y)
    x.splice(indice, 1)
    console.log(x.join(', '))
}

cancelarAtendimento(pacientes, paciente)