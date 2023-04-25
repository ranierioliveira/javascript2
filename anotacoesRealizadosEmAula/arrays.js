let jogos = ["God of War 2", "Midnight Club 3", "Fifa"];

jogos.push("Need For Speed");//Adc um item
jogos.push("Mario Bross");
jogos.push("Sonic");

// jogos.shift(); //remove o primeiro item
// jogos.pop();//remove o último

//at "pega" a partir do último número
let ultimoJogo = jogos.at(-1);

let fifa = jogos.indexOf("Fifa");

console.log("Indice do fifa: " + fifa);
console.log("Último jogo: " + ultimoJogo);
console.log("Array completa: " + jogos);
