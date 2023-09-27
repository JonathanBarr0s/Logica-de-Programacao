const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
}

let acerto = 0;

function corrigirProva(aluno) {
    for (let i of prova.questoes) {
        if (i.resposta === i.correta) {
            acerto = acerto + 1;
        }
    }
    console.log(`O aluno(a) ${prova.aluno} acertou ${acerto} questões e obteve nota 6`);
}

corrigirProva();
