document.write('<strong>[t]</strong> ver todos os filmes <br> <strong>[rand]</strong> ordem aleatória <br> <strong>[v]</strong> ver filme<br> <strong>[size]</strong> mostrar quantidade de filmes <br> <strong>[d]</strong> deletar filme <br> <strong>[du]</strong> deletar ultimo filme <br>  <strong>[dp]</strong> deletar primeiro filme <br> <strong>[a]</strong> adicionar filme <br> <strong>[p]</strong> ver primeiro filme adicionado <br> <strong>[u]</strong> ver último filme adicionado  <br> <strong>[asc]</strong> ordenar filmes (alfabética, asc) <br>  <strong>[desc]</strong> ordenar filmes (alfabética, desc)');

const listaFilmes = ["Dark Night", "Arrival", "Inception", "Interestelar", "Auto da Compadecida", "Inglorious Basterds", "Django", "Infinity War", "Kung-fu Panda", "Wolf of Wall Street"];

const acao = prompt("Digite a ação que deseja: ");

switch (acao){
    case "t":
        console.log(...listaFilmes);
    break
    case "rand":
        listaFilmes.sort(()=>Math.random() - 0.5);
        console.log(...listaFilmes);
    break
    case "v":
        const posicaoFilme = Number(prompt("Digite a posição do filme: "));
        const filmeSelecionado = listaFilmes[posicaoFilme - 1];
        console.log(filmeSelecionado);
    break;
    case "size":
        const quantidadeFilmes = listaFilmes.length;
        console.log(quantidadeFilmes);
    break;
    case "d":
        const posicaoElemento = Number(prompt("Digite a posição filme: "));
        listaFilmes.splice(posicaoElemento - 1, 1);
        console.log(...listaFilmes);
    break;
    case "du":
        listaFilmes.pop();
        console.log(...listaFilmes);
    break;
    case "dp":
        listaFilmes.shift();
        console.log(...listaFilmes);
    break;
    case "a":
        const adicionarFilme = prompt("Digite o filme para ser adicionado: ");
        listaFilmes.push(adicionarFilme);
        console.log(...listaFilmes);
    break;
    case "p":
        const[primeiroFilme] = listaFilmes;
        console.log(primeiroFilme);
    break;
    case "u":
        const ultimoFilme  = listaFilmes.at(-1);
        console.log(ultimoFilme);
    break;
    case "asc":
        listaFilmes.sort();
        console.log(...listaFilmes);
    break;
    case "desc":
        listaFilmes.sort();
        listaFilmes.reverse();
        console.log(...listaFilmes);
    break;
    default:
        console.log("Ação desconhecida!");
}