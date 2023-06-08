const str = 'Internet Explorer';
const comecaComInternet = str.startsWith('Internet'); //Retorna true ou false
const terminaComExplorer = str.endsWith('Explorer');

const str2 = "Naquele dia frio de inverno, o aroma irresistível das batatas fritas recém-saídas do óleo quente enchia o ar, despertando em mim uma fome voraz.";

const incluiBatata = str2.includes('batata');
const posicao = str2.indexOf('batata'); //lastIndexOf
const novaStr2 = str2.replace('batata', 'manga'); //como a string é imutável, para alterar o texto é preciso atribuir a outra variável

console.log(novaStr2);


