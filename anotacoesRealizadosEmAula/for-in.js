// let numeros = [2, 7, 3, 4, 8, 9];
// let somatorio = 0;

// // for(let i = 0; i < numeros.length; i++){
// //     somatorio += numeros[i]
// // }

// for(i in numeros){ //for in percorre os índices
//     somatorio += numeros[i];
// }
// console.log(somatorio);

const professor = {
    nome: 'Eduardo',
    sobrenome: 'Velho',
    idade: 28,
    materia: 'JS'
}

for(let propriedade in professor){
    console.log(propriedade); //Acessa as propriedades
    console.log((professor[propriedade]));//Acessa os valores das propriedades
}