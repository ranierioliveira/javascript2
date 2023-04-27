const carros = [
    "Chevette",
    "Marea",
    "Uno",
    "HB20",
    "Corsa",
    "Fusca"
]

const [primeiroCarro, segundoCarro, terceiroCarro, ... carrosRestantes] = carros;

carros.splice(2, 0, "Civic");
carros.splice(6, 1)

console.log(carros);