import { existsSync, mkdirSync, writeFileSync, readFileSync, write } from 'fs';

//Models:
type livro = {
    titulo: string;
    autor: string;
    ano: number;
    lido : boolean;
    genero?: string;
};

type hobby = string;

type famososFav = {
    nome: string;
    idade : number;
};

type amigo = {
    nome: string;
    ondeConheci : string;
    famosoConhecido : famososFav[];
    hobbies : hobby[];
};

//Manipulação de arquivos JSON

//1. Função para adicionar um livro para arquivo JSON

const livros: livro[] = [];
livros.push({titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, lido: true, genero: "Fantasia"});
livros.push({titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937, lido: true, genero: "Fantasia"});
livros.push({titulo: "Pokemon: Red and Blue", autor: "Satoshi Tajiri", ano: 1996, lido: true, genero: "Aventura"});
livros.push({titulo: "1984", autor: "George Orwell", ano: 1948, lido: false});

//2. Percorrer o array (Lists) de livros e impreimir os titulos

livros.forEach((livro) => {
    console.log(`Título: ${livro.titulo} ${livro.ano}) - Autor: ${livro.autor} Lido: ${livro.lido} Gênero: ${livro.genero}`);
});

//3. Filtrar a lista (ex:Apenas os livros lidos)
const livrosLidos = livros.filter((livro) => livro.lido === true);

//4. Encontrar um filto especifico (ex: Livro com o título "1984")
const livroEncontrado = livros.find((livro) => livro.titulo === "1984");

// Salvar no disco (em um arquivo JSON)

const diretorio = 'data';
if (!existsSync(diretorio)) {
    mkdirSync(diretorio);
}
writeFileSync(`${diretorio}/livros.json`, JSON.stringify(livros, null, 2), 'utf-8');
//os parametros null e 2 são para identar e deixar visualmente legivel

//6. Ler o arquivo JSON e imprimir os livros lidos
const livrosLidosDoArquivo :
    livro[] = JSON.parse(readFileSync(`${diretorio}/livros.json`, 'utf-8'));
console.log("Livros lidos do arquivo JSON:", livrosLidosDoArquivo);

