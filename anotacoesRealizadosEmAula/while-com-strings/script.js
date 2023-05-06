const produtos = [
    'maçã', 
    'leite',
    'manteiga',
    'queijo',
    'costelinha',
    'doritos',
    'yogurt'
]

let i = 0;
const busca = prompt("Digite algo para pesquisar");
let achouProduto = false;

while(i < produtos.length){
    const produtoAtual = produtos[i];
    if(produtoAtual.includes(busca)){
        achouProduto = true;
        alert('O produto foi encontrado: ' + produtoAtual);
        break;
    }
    i++;
}

if(!achouProduto){
    alert("Não encontrado!");
}