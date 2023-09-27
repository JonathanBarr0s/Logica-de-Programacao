const livro = {
    nome: 'O poder do hábito',
    capitulos: [
        {
            nome: "O loop do hábito",
        },
        {
            nome: "O cérebro ansioso",
        },
        {
            nome: "A regra de ouro da mudança de hábito",
        },
        {
            nome: "Hábitos angulares, ou a balada de Paul O`neill",
        },
        {
            nome: "Starbucks e o hábito do sucesso",
        },
        {
            nome: "O poder de uma crise",
        },
        {
            nome: "Como a target sabe o que você quer antes que você saiba",
        },
        {
            nome: "A Saddleback Church e o boicote aos ônibus de Montgomery",
        },
        {
            nome: "A neorologia do livre-arbítrio",
        },
    ]
}

for (let i = 0; i < livro.capitulos.length; i++) {
    livro.capitulos[i].numero = i + 1;
}

console.log(livro);
