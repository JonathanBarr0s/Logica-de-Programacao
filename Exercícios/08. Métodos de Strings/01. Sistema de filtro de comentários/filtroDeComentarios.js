const comentario = 'Esse PANDEMIA é muito perigoso!';

palavraProibidaUm = comentario.includes('pandemia')
palavraProibidaDois = comentario.includes('PANDEMIA')
palavraProibidaTres = comentario.includes('covid')
palavraProibidaQuatro = comentario.includes('COVID')

if (palavraProibidaUm ||
    palavraProibidaDois ||
    palavraProibidaTres ||
    palavraProibidaQuatro
) {
    console.log('Comentário bloqueado por conter palavras proibidas');
} else {
    console.log('Comentário autorizado');
}