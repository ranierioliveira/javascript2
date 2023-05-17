const receptor1 = [2, 2, 1, 6, 4, 10, 8];
const receptor2 = [2, 8, 1, 6, 0, 10, 8];

let maxValor = 0;
let maxValor1 = 0;

function comparar(receptor1, receptor2){
    for(let i = 0; i < receptor1.length; i++){
        if(receptor1[i] === receptor2[i]){
            if(receptor1[i] > maxValor){
                maxValor = receptor1[i];
                maxValor1++
            }
        }
    }
    return maxValor1;
}

console.log(comparar(receptor1, receptor2));
