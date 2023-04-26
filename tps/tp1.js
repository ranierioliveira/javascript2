const frutas = ['laranja', 'maça', 'goiaba', 'abacaxi'];
const [fruta1, fruta2, fruta3, fruta4] = frutas;

//console.log(fruta1);

const carros = ['astra', 'golf', 'corsa', 'celta'];

const [carro1, ...outros] = carros;

console.log(carro1);