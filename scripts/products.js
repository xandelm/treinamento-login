// class Produto {
//     static idCounter = 0;
//     constructor(imagem,nome,categoria,quantidade){
//         //TODO: validar dados. talvez criar uma função recebendo os parâmetros, ou validar apenas quando criar novo produto
//         idCounter++;
//         this.id = idCounter;
//         this.imagem = imagem;
//         this.nome = nome;
//         this.categoria = categoria;
//         this.quantidade = quantidade;
//         this.dataCriação = Date.now;
//         this.datasModificação = new Array();
//     }
// }



// function isProduct(produto) {
//     return (produto instanceof Produto);
// }


/**
 * Adiciona um Produto no LocalStorage
 * @param {object} produto o prod a ser adicionado
 * @returns {boolean} true caso seja adicionado. false se não.
 */



function addProduto(produto) {
    try{
        let produtoJson = JSON.stringify(produto);
        const allProducts = localStorage.getItem('products');
        let arrayProducts = [...[allProducts],produtoJson]; //appending with spread synthax
        localStorage.setItem('products', JSON.stringify(arrayProducts));
        console.log('Produtos: '+JSON.stringify(arrayProducts)); //teste
        alert('Produto Adicionado');
        return true;
    }
    catch(e){
        console.log('Erro ao adicionar produto: '+ e.message);
        alert('Erro ao add prod');
    }
}

function getLocalStorageProducts(){
    const allProducts = localStorage.getItem('products');
    return JSON.parse(allProducts);
}

function saveProducts(products){
    localStorage.setItem('products', JSON.stringify(products));
}

function delProduto(produto) {
    try{
        let produtoJson = JSON.stringify(produto);
        let allProducts = localStorage.getItem('products');
        if(!allProducts.includes(produtoJson)) console.log('Não existe!');
        allProducts.replace(produtoJson, '');
        //precisa deletar? localStorage.remove
        localStorage.setItem('products', allProducts);
    } catch (e){
        console.log('Erro:' +e.message);
    }
}


//TODO: function (listarProduto): ja feita em renderProdutos
//TODO: function (listarDetalhesProduto)
//TODO: function (atualizarProduto)


function loadProdutos(produtos) {
    const produtosDiv = document.getElementById('produtos');
    produtosDiv.innerHTML = '';

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');

        const conteudoProduto = `
          <img src="${produto.src}">
          <p><strong>Nome:</strong> ${produto.nome}</p>
          <p><strong>Categoria:</strong> ${produto.categoria}</p>
          <p><strong>Quantidade:</strong> ${produto.quantidade}</p>
          <p><strong>Preço:</strong> $${produto.preco.toFixed(2)}</p>
          <button onclick="alterarProduto(${produto})" id="alterarProduto" style="flex-shrink: initial; max-width: fit-content">Alterar</button>
        `;

        produtoDiv.innerHTML = conteudoProduto;


        produtosDiv.appendChild(produtoDiv);
    });
}
function alterarProduto(produto) {
    const modal = document.createElement('div');
    modal.classList.add('modalContent');
    modal.id = 'modalContent';
    modal.hidden = false; // Display the modal

    modal.innerHTML = `
        <div class="modalContent">
            <span class="close" onclick="fecharModal()">&times;</span>
            <h2>Detalhes do Produto</h2>
            <p><strong>Nome:</strong> ${produto.nome}</p>
            <p><strong>Categoria:</strong> ${produto.categoria}</p>
            <p><strong>Quantidade:</strong> ${produto.quantidade}</p>
            <p><strong>Preço:</strong> $${produto.preco.toFixed(2)}</p>
        </div>
    `;

    document.body.appendChild(modal);
}


function mapProduto(){
    const urlElement = document.getElementById('URLImagem');
    const nomeElement = document.getElementById('productName');
    const categoriaElement = document.getElementById('productCategoria');
    const quantidadeElement = document.getElementById('productQuantidade');
    const  precoElement= document.getElementById('productPreco');

    const novoProduto = {
        src:urlElement.value,
        nome: nomeElement.value,
        categoria: categoriaElement.value,
        quantidade: quantidadeElement.value,
        preco: precoElement.value,
        dataCriacao : new Date(),
        datasModificacao: []
    };
    addProduto(novoProduto);
}






const arrayDeProdutos = [
    { id: 0, src: "https://picsum.photos/200/300?random=1", nome: 'Produto 1', categoria: 'Eletrônicos', quantidade: 5, preco: 99.99 },
    { id: 1, src: "https://picsum.photos/200/300?random=2", nome: 'Produto 2', categoria: 'Roupas', quantidade: 10, preco: 49.99 },
    { id: 2, src: "https://picsum.photos/200/300?random=3", nome: 'Produto 3', categoria: 'Livros', quantidade: 20, preco: 19.99 },
];


document.getElementById('addProduct').onclick = mapProduto;

loadProdutos(arrayDeProdutos);






