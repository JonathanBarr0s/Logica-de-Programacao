const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Ana', 'Jonathan', 'Carol', 'Leticia', 'Luiz', 'Eduarda', 'Maria'];
const tamanhoDoGrupo = 4;

function divisaoGrupos (x, y) {
    let tamanhoNomes = Math.ceil((x.length) / tamanhoDoGrupo)
    let i = 0;
    let a = 0;
    let b = tamanhoDoGrupo;
    
    while (i < tamanhoNomes) {
        ++i
        let grupo = nomes.slice(a, b)
        let grupo1 = grupo.join(', ')
        console.log(`Grupo ${i}: ${grupo1}`)
        a = a + tamanhoDoGrupo
        b = b + tamanhoDoGrupo
    }
}

divisaoGrupos(nomes, tamanhoDoGrupo);

