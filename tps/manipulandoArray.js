const notas = [10, 5, 6, 9, 8, 7];

let fatia = notas.slice(2,4);

console.log(notas.length);
console.log(notas);
console.log(fatia);

const invertido = notas.reverse();
console.log(invertido);
const arrayCrescente = notas.sort(function(a, b) {
    return a - b;
})
console.log(arrayCrescente);
