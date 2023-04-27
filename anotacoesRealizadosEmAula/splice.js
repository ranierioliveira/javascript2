const cores = ["vermelho", "amarelo", "rosa", "azul", "verde"];

cores.splice(1, 2, "preto", "laranja");

const coresSemPush = cores.concat("marrom", "bege")

console.log(coresSemPush);