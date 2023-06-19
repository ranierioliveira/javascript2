const num = [3,2, 5, 6, 1, 2, 10, 9, 7];

function ordenarNumeros (numA, numB){
    if(numA > numB){
        return 1; //numA depois
    } else if (numA < numB){
        return -1; //numA antes
    } else {
        return 0; //Mantém
    }
}

num.sort(ordenarNumeros);
console.log(num);