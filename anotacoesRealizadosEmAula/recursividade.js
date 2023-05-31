function criaArrayDeNumeros(tamanho, numeros){
    if(numeros.length < tamanho){
        const proximoNumeros = numeros.concat(numeros.length + 1);
        return criaArrayDeNumeros(tamanho, proximoNumeros);
    }
    return numeros;
};

const vetorNumeros = criaArrayDeNumeros(3, []);

console.log(vetorNumeros);