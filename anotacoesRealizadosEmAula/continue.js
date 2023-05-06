const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let i = 0;

while(i < numeros.length){
    const numeroAtual = numeros[i];
    if(numeroAtual % 2 === 0){
        i++
        continue;
    }
    console.log(numeroAtual);
    i++;
}