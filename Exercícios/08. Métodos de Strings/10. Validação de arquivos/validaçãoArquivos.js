const nomeArquivo = 'Foto da Familia.pdf';

let extensao = nomeArquivo.length - 4;

if (nomeArquivo.includes('.jpg') ||
    nomeArquivo.includes('jpeg') ||
    nomeArquivo.includes('.gif') ||
    nomeArquivo.includes('.png')
) {
    console.log('Arquivo válido');
} else {
    console.log('Arquivo inválido');
}