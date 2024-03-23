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



