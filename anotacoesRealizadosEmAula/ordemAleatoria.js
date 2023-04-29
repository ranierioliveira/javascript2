const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Math.random () - 0.5 ----- 50% de ser positivo e 50% de ser negativo
//Pois o intervalo do número sorteado passa a ser -0.5 e 0.5; 

function embaralhaNumeros(){
    return Math.random() - 0.5;
}

nums.sort(embaralhaNumeros);

//nums.sort(()=> Math.random() - 0.5);

console.log(...nums);

