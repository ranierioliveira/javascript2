const numeros = [2, 3, 1, 10, 12, 7, 6, 5];
const verificar = Number(prompt("Digite um número: "));

let i = 0;

while(i < numeros.length){
    const numeroAtual = numeros[i];
    if(numeroAtual === verificar){
        alert(`O número ${verificar} existe no vetor na posição ${i}`);
        break; //Encerra o loop
    }
    i++
}