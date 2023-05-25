const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// const maiorQ7 = numeros.filter(numero => {
//     if(numero > 7){
//         return true;
//     } else {
//         return false;
//     }
// })

const maiorQ7 = numeros.filter(numero => numero > 7);

console.log(maiorQ7);