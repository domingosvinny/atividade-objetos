const prompt = require('prompt-sync')({ sigint: true });

// Inicializando o carrinho de compras como um array vazio
let carrinhoDeCompras = [];

// Loop principal do programa
while(true) {
    console.log("\nEscolha uma opção:");
    console.log("1. Adicionar ao carriho:");
    console.log("2. Visualizar produtos no carrinho:");
    console.log("3. Sair");

    let opcao = prompt("Opção: ");

    if (opcao == "1") {
        let nome = prompt("Informe o produto: ");
        let preco = parseFloat(prompt("Informe o preço do produto: "));
        let quantidade = parseInt(prompt("Informe a quantidade do produto: "));

        // Calculando o subtotal do produto
        let subtotal = preco * quantidade;
    
        // Adicionando o produto ao carrinho
        carrinhoDeCompras.push({
            nome: nome,
            preco: preco,
            quantidade: quantidade,
            subtotal: subtotal

        });
        // Exibindo mensagem de confirmação
        console.log("Produto adicionado ao carrinho!");
    } else if (opcao === "2") {
        console.log("Produtos no carrinho:");
        let totalCompra = 0;
        
        // Iterando sobre os produtos no carrinho
        for (let produto of carrinhoDeCompras){
            console.log(`Nome: ${produto.nome}, Preço Unitário: ${produto.preco.toFixed(2)},Quantidade: ${produto.quantidade.toFixed(2)}, Subtota: ${produto.subtotal.toFixed(2)}`);

            // Somando o subtotal ao total da compra
            totalCompra += produto.subtotal;
        }
        // Exibindo o total da compra
        console.log(`Total da Compra: R$ ${totalCompra.toFixed(2)}`);
    } else if (opcao === "3"){
        break;
    } else {
        console.log("Opção inválida. Por favor, escolha novamente.");
    }
}


// Descrição de algumas funções //

/*  while (true) {  -       são usados para repetir uma sequência de instruções um número desconhecido de vezes. Este tipo de laço roda enquanto uma dada condição
     é True (verdadeira) e somente é interrompida quando a condição se torna False (falsa).

    Push({ -    O método push é uma função embutida no JavaScript que permite adicionar um elemento ou vários elementos ao final de um array existente. Ele modifica
     o próprio array, aumentando o seu tamanho e inserindo os novos elementos no final.

    toFixed(2) - é um método nativo do JavaScript que permite arredondar um número para um número específico de casas decimais. Para arredondar um número para
     duas casas decimais, basta chamar o método toFixed(2)
    
    parseFloat - é uma função incorporada no JavaScript que permite realizar essa conversão para um número de ponto flutuante. Ao utilizar o parseFloat, é necessário
     passar a string como argumento para a função. A função irá analisar a string e retornar o valor numérico correspondente.
    
    parseInt  - a função produz um valor inteiro ditado pela interpretação do conteúdo de uma argumento string de acordo com uma base específicada.
    
    *Diferença entre parseInt e parseFloat
    Entenda a diferença entre os métodos parseInt() e parseFloat() : É crucial entender a diferença entre essas duas funções. parseInt() é usado para converter
     uma string em um número inteiro, enquanto parseFloat() lida com números de ponto flutuante. */