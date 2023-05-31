import fs from "fs";
import chalk from "chalk";

function extraiLinks (texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados.length !== 0 ? resultados : 'Não há links no arquivo.';
}

function trataErro (erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório.'));
}

async function pegaArquivo (caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro);
    }
}

export default pegaArquivo;

// pegaArquivo('./arquivos/texto.md');

/*
function pegaArquivo (caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminhoDoArquivo, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch((erro) => trataErro(erro))
}


function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro)
        }
        console.log(chalk.green(texto));
    })
}
*/



// \[[^[\]]*?\]
// \(https?:\/\/[^\s?#.].[^\s]*\)

// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)