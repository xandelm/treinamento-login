function pushNotify(msg) {
    new Notify({
        status: 'success',
        title: 'Sucesso',
        text: `${msg}`,
        effect: 'fade',
        speed: 300,
        customClass: null,
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: false,
        autotimeout: 3000,
        gap: 20,
        distance: 20,
        type: 1,
        position: 'right top'
    })
}

function pushNotifyError(msg) {
    new Notify({
        status: 'error',
        title: 'Erro',
        text: `${msg}`,
        effect: 'fade',
        speed: 300,
        customClass: null,
        customIcon: null,
        showIcon: true,
        showCloseButton: true,
        autoclose: false,
        autotimeout: 3000,
        gap: 20,
        distance: 20,
        type: 1,
        position: 'right top'
    })
}


function addProduto(produto) {
    try {
        let produtoJson = JSON.stringify(produto);
        const allProducts = localStorage.getItem('products');
        let arrayProducts = allProducts ? JSON.parse(allProducts) : [];
        arrayProducts.push(produtoJson);
        localStorage.setItem('products', JSON.stringify(arrayProducts));
        console.log('Produtos: ' + JSON.stringify(arrayProducts)); //teste
        pushNotify('Produto Adicionado');

        //close the modal
        const addProductButton = document.getElementById('addProduct');
        //
        return true;
    } catch (e) {
        console.log('Erro ao adicionar produto: ' + e.message);
        pushNotifyError('Erro ao adicionar produto');
        return false;
    }
}

// function addProduto(produto) {
//     try {
//         let produtoJson = JSON.stringify(produto); //ok
//         const allProducts = localStorage.getItem('products'); //ok
//         let arrayProducts = allProducts ? JSON.parse(allProducts):[];
//         arrayProducts.push(produtoJson);
//         localStorage.setItem('products', JSON.stringify(arrayProducts)); //ok
//         console.log('Produtos: ' + JSON.stringify(arrayProducts)); //teste
//         pushNotify('Produto Adicionado');
//         //quando adicionar, atualizar a página
//         return true;
//     } catch (e) {
//         console.log('Erro ao adicionar produto: ' + e.message);
//         pushNotifyError('Erro ao adicionar produto')
//     }
// }

function getLocalStorageProducts() {
    //return JSON.parse(localStorage.getItem('products')) || [];
    const productsString = localStorage.getItem('products');
    if (productsString) {
        const productsArray = JSON.parse(productsString);
        return productsArray.map(productsString => JSON.parse(productsString));
    } else {
        return [];
    }
}

function saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

function alterProduct(productID, produtoAlterado) {
    const allProducts = getLocalStorageProducts();
    let arrayProducts = Object.entries(allProducts);
    let produtoIndex = arrayProducts.findIndex(produtoAlterado);
    try {
        arrayProducts[produtoIndex] = produtoAlterado;
        saveProducts(arrayProducts);
        pushNotify('Produto Alterado');
    } catch (e) {
        pushNotifyError(e.message);
    }
}


function delProduto(produto) {
    try {
        let produtoJson = JSON.stringify(produto);
        let allProducts = localStorage.getItem('products');
        if (!allProducts.includes(produtoJson)) console.log('Não existe!');
        allProducts.replace(produtoJson, '');
        //precisa deletar? localStorage.remove
        localStorage.setItem('products', allProducts);
        pushNotify('Produto deletado');
    } catch (e) {
        console.log('Erro:' + e.message);
        pushNotifyError(e.message);
    }
}


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
          <p><strong>Preço:</strong> $${Number(produto.preco).toFixed(2)}</p>
          <button onclick="alterarProduto(${produto})" id="alterarProduto" style="flex-shrink: initial; max-width: fit-content">Alterar</button>
<!--          <input class="modal-state" id="modal-1" type="checkbox" />-->
          

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


function mapProduto() {
    const urlElement = document.getElementById('URLImagem');
    const nomeElement = document.getElementById('productName');
    const categoriaElement = document.getElementById('productCategoria');
    const quantidadeElement = document.getElementById('productQuantidade');
    const precoElement = document.getElementById('productPreco');

    const novoProduto = {
        src: urlElement.value,
        nome: nomeElement.value,
        categoria: categoriaElement.value,
        quantidade: quantidadeElement.value,
        preco: precoElement.value,
        dataCriacao: new Date(),
        datasModificacao: []
    };
    addProduto(novoProduto);
}


document.getElementById('addProduct').onclick = mapProduto;

loadProdutos(getLocalStorageProducts());
localStorage.clear();





