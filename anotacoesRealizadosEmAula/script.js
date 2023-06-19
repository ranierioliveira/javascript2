let somatorio = 0;

while(true){
    let integerError = ""
    try{
        const numero = promptInteger('Digite um número: ');
        if (numero === 0){
            break;
        }
        somatorio += numero; 
    } catch(error){
        //Trata dos erros relacionados ao que foi recebido pelo input
        if(error instanceof RangeError){
            integerError = error;
            alert('Erro: digite apenas números inteiros!');
        } else { //Trata dos outros erros, ex: sintaxe
            throw error;
        }
      
    } finally {
        if(integerError !== undefined){
            const shouldContinue = confirm("Deseja continuar?");
            if(shouldContinue){
                alert(`Resultado parcial: ${somatorio}`);
            } else {
                break;
            }
        }
    }
    
    
}

function promptInteger(text){
    //Precisa ser um número válido
    //Precisa ser um número inteiro
    const numero = Number(prompt(text));
    if(isNaN(numero)){
        //Caso dê erro o programa encerra
        throw new RangeError('Digite um número para ser feita a soma!');
    } else if (!Number.isInteger(numero)){
        throw new RangeError('Digite um número inteiro');
    }
    return numero;
}

alert (somatorio);