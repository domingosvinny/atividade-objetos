
const entrada = require('prompt-sync')({ sigint: true });
//let nome = [];

nomecliente = entrada("Sr.(a) cliente, por favor digite seu nome: ");

console.log("Sr.(a), " + nomecliente + " hoje temos disponivel: ");


let produtos = [
    {
        idcod: 1,
        nome: "Pão",
        precouni: 1.55,
    },
    {
        idcod: 2,
        nome: "Leite",
        precouni: 4.99,
    },
    {
        idcod: 3,
        nome: "Manteiga",
        precouni: 8.00,
    },
    {
        idcod: 4,
        nome: "Iogurte",
        precouni: 3.45,
    },
    {
        idcod: 5,
        nome: "Açucar",
        precouni: 3.45,
    },

];

for (let i = 0; i < produtos.length; i++) {
    console.log(

        "Produto: " + produtos[i].idcod +
        " - " + produtos[i].nome +
        " - R$ " + produtos[i].precouni.toFixed(2)

    );
}
