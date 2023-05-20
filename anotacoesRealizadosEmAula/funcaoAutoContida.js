const meusNumeros = [40, 10, 60, 20, 35, 90, 20];
const meusNumeros2 = [20, 80, 10, 25, 30, 75, 10];

const somatorioNumerosRetorno = somatorio(meusNumeros);
const somatorioNumerosRetorno2 = somatorio(meusNumeros2);

console.log(somatorioNumerosRetorno, somatorioNumerosRetorno2);

function somatorio(numeros){ //Auto-contida, sendo reutilizável
    let somatorioNumeros = 0;
    for(const numero of numeros){
        somatorioNumeros += numero;
    }
    return somatorioNumeros;
}
