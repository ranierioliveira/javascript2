function getItem (arr, index){
    const item = arr[index];
    if(item === undefined){
        const rangeError = new RangeError('Esse índice não existe!');
        throw rangeError;
    }
    return item;
}

const colors = ['vermelho', 'azul', 'verde', 'roxo'];
const color = getItem(colors, 4);

console.log(color);