// tp 1.4

let colegioNome = "Escola";
let anoFundacao = 1985;

let colegio = {
    colegioNome, 
    anoFundacao, 
    nomeDiretor: 'Cidcley',
    telefone: "1998884848",
    obterDiretor(){
        return this.nomeDiretor;
    }

};

let obter = colegio.obterDiretor();
console.log(obter);

// tp1.5

