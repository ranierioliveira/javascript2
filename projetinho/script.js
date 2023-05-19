document.write('<strong>[t]</strong> ver todos os filmes <br> <strong>[rand]</strong> ordem aleatória <br> <strong>[v]</strong> ver filme<br> <strong>[size]</strong> mostrar quantidade de filmes <br> <strong>[d]</strong> deletar filme <br> <strong>[du]</strong> deletar ultimo filme <br>  <strong>[dp]</strong> deletar primeiro filme <br> <strong>[a]</strong> adicionar filme <br> <strong>[p]</strong> ver primeiro filme adicionado <br> <strong>[u]</strong> ver último filme adicionado  <br> <strong>[asc]</strong> ordenar filmes (alfabética, asc) <br>  <strong>[desc]</strong> ordenar filmes (alfabética, desc)');

const listaFilmes = ["Dark Night", "Arrival", "Inception", "Interestelar", "Auto da Compadecida", "Inglorious Basterds", "Django", "Infinity War", "Kung-fu Panda", "Wolf of Wall Street"];

const acao = prompt("Digite a ação que deseja: ");

switch (acao){
    case "t":
        verTodosOsFIlmes();
    break
    case "rand":
        mostrarFilmesEmOrdermAleatoria();
    break
    case "v":
        verFilme();
    break;
    case "size":
        mostrarQuantidadeDeFilmes();
    break;
    case "d":
        deletaFilme();
    break;
    case "du":
        deletaUltimoFilme();
    break;
    case "dp":
        deletaPrimeiroFilme();
    break;
    case "a":
        adicionaFilme();
    break;
    case "p":
        verPrimeiroFilme();
    break;
    case "u":
        verUltimoFilme();
    break;
    case "asc":
        filmesEmOrdemAlfabetica();
    break;
    case "desc":
        ordemAlfabeticaInvertida();
    break;
    default:
        console.log("Ação desconhecida!");
}

function verTodosOsFIlmes(){
    console.log(...listaFilmes);
}
function mostrarFilmesEmOrdermAleatoria(){
    listaFilmes.sort(()=>Math.random() - 0.5);
    console.log(...listaFilmes);
}

function verFilme(){
    verTodosOsFIlmes();
    const posicaoFilme = Number(prompt("Digite a posição do filme: "));
    const filmeSelecionado = listaFilmes[posicaoFilme - 1];
    console.log(filmeSelecionado);
}

function mostrarQuantidadeDeFilmes(){
    const quantidadeFilmes = listaFilmes.length;
    console.log(quantidadeFilmes);
}

function deletaFilme(){
    const posicaoElemento = Number(prompt("Digite a posição filme: "));
    listaFilmes.splice(posicaoElemento - 1, 1);
    console.log(...listaFilmes);
}

function deletaUltimoFilme(){
    listaFilmes.pop();
    console.log(...listaFilmes);
}

function deletaPrimeiroFilme(){
    listaFilmes.shift();
    console.log(...listaFilmes);
}

function adicionaFilme(){
    const adicionarFilme = prompt("Digite o filme para ser adicionado: ");
    listaFilmes.push(adicionarFilme);
    console.log(...listaFilmes);
}

function verPrimeiroFilme(){
    const[primeiroFilme] = listaFilmes;
    console.log(primeiroFilme);
}

function verUltimoFilme(){
    const ultimoFilme  = listaFilmes.at(-1);
    console.log(ultimoFilme);
}

function filmesEmOrdemAlfabetica(){
    listaFilmes.sort();
    console.log(...listaFilmes);
}

function ordemAlfabeticaInvertida(){
    listaFilmes.sort();
    listaFilmes.reverse();
    console.log(...listaFilmes);
}