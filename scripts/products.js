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



function isProduct(produto) {
    return (produto instanceof Produto);
}


/**
 * Adiciona um Produto no LocalStorage
 * @param {Produto} produto o prod a ser adicionado 
 * @returns {boolean} true caso seja adicionado. false se não.
 */
function addProduto(produto) {
    if(!(isProduct(produto))) return false;
    produto.datasModificação.push(Date.now);
    let produtoJson = JSON.stringify(produto);
    try{
        localStorage.setItem('id','produtoJson');
        return true;
    }
    catch(e){
        console.log('Erro ao adicionar produto: '+ e.message);
    }
}


function delProduto(produto) {
    if(!(isProduct(produto))) return false;
    localStorage.removeItem(produto.id);
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
        `;

        produtoDiv.innerHTML = conteudoProduto;

        produtosDiv.appendChild(produtoDiv);
    });
}

const arrayDeProdutos = [
    { id: 0, src: "https://picsum.photos/200/300?random=1", nome: 'Produto 1', categoria: 'Eletrônicos', quantidade: 5, preco: 99.99 },
    { id: 1, src: "https://picsum.photos/200/300?random=2", nome: 'Produto 2', categoria: 'Roupas', quantidade: 10, preco: 49.99 },
    { id: 2, src: "https://picsum.photos/200/300?random=3", nome: 'Produto 3', categoria: 'Livros', quantidade: 20, preco: 19.99 },
];


loadProdutos(arrayDeProdutos);


document.getElementById('btn-add-prod').onclick = addProduto;





