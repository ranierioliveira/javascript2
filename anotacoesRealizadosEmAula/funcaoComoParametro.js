function executaOperacaoMatematica(a, b, operacaoMatematica){
    return operacaoMatematica(a, b);
}

const res = executaOperacaoMatematica(2, 3, soma)//passando a referência da função, sem a invocar

console.log(res);

function soma(a, b){
    return a+b;
}

function subtrai(a, b){
    return a - b;
}

function multiplica(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}
