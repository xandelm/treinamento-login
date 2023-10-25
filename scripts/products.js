/**
 * Imprime mensagem de sucesso na página utilizando simple-notify API
 *
 * @param msg Texto da mensagem
 */
function pushNotify(msg) {
    new Notify({
        status: "success",
        title: "Sucesso",
        text: `${msg}`,
        effect: "fade",
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
        position: "right top",
    });
}

/**
 * Imprime mensagem de erro na página utilizando simple-notify API
 *
 * @param msg Texto da mensagem
 */
function pushNotifyError(msg) {
    new Notify({
        status: "error",
        title: "Erro",
        text: `${msg}`,
        effect: "fade",
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
        position: "right top",
    });
}

/**
 * Adiciona um produto no localStorage e atualiza a página
 *
 * @return {boolean} true se adicionado com sucesso. false se não
 * @param produto array de produtos
 */
function addProduto(produto) {
    try {
        let produtoJson = produto;

        const allProducts = localStorage.getItem("products");

        //seleciona o array de produtos se existir. se não cria um novo array vazio
        let arrayProducts = allProducts ? JSON.parse(allProducts) : [];
        arrayProducts.push(produtoJson);
        localStorage.setItem("products", JSON.stringify(arrayProducts));
        console.log("Produtos: " + JSON.stringify(arrayProducts)); //teste
        loadProdutos(getLocalStorageProducts());

        pushNotify("Produto Adicionado");
        document.getElementById('addProduct-form').reset();
        closeModal();
        return true;
    } catch (e) {
        console.log("Erro ao adicionar produto: " + e.message);
        pushNotifyError("Erro ao adicionar produto");
        return false;
    }
}

/**
 * Seleciona o modal no documento e o fecha
 */

/**
 * Busca todos os produtos armazenados no localstorage
 *
 * @return {[]} array de produtos buscados no localstorage. Array vazio se não existirem produtos
 */
function getLocalStorageProducts() {
    let products = localStorage.getItem("products");
    return products ? JSON.parse(products) : [];
}

/**
 * Converte um Object para uma JSON string e salva no LocalStorage
 * @param products Object de produtos
 */
function saveProducts(products) {
    try {
        let arrayProducts = products;

        console.log("Saving", arrayProducts);
        console.log("Savingsss", JSON.stringify(arrayProducts));
        localStorage.setItem("products", JSON.stringify(arrayProducts));
        loadProdutos(getLocalStorageProducts());
    } catch (error) {
        console.log(error);
    }

    /* localStorage.setItem('products', JSON.stringify(...arrayProducts));*/
    // localStorage.setItem('products', JSON.stringify(products));
}

function openEditModal() {
    document.getElementById("myEditModal").style.display = "flex";
}

function closeModal() {
    const modalCheckbox = document.getElementById("modal-1");
    modalCheckbox.checked = false;
}

function closeEditModal() {
    document.getElementById("myEditModal").style.display = "none";
}

/**
 * Atualiza a informação de algum produto no localStorage
 * @param productID id do produto a ser alterado para busca e escrita
 */
function alterProduct(productID) {
    console.log(alterProduct);
    let product = getLocalStorageProducts().find((p) => p.id === productID);
    // document.getElementById('editProductId').value = productID;
    document.getElementById("editProductId").value = product.id;
    document.getElementById("editProductName").value = product.nome;
    document.getElementById("editProductQuantity").value = product.quantidade;
    document.getElementById("editProductCategory").value = product.categoria; //esá sendo usado hidden no html
    document.getElementById("editProductPrice").value = product.preco;
    document.getElementById("editProductImage").value = product.src;
    openEditModal(); //TODO teste
}

function saveProductChanges() {
    alert("aqui!");

    try {
        const novoProduto = {
            id: document.getElementById("editProductId").value,
            src: document.getElementById("editProductImage").value,
            nome: document.getElementById("editProductName").value,
            categoria: document.getElementById('editProductCategory').value,
            quantidade: document.getElementById("editProductQuantity").value,
            preco: document.getElementById("editProductPrice").value,
            datasModificacao: new Date(),
        };
        updateLocalStorageProduct(novoProduto);
        //TODO: check if categoria is passing
        pushNotify("Produto Modificado!");
        closeEditModal();
        // this.window.location.reload();
    } catch (e) {
        console.log(e.message);
    }
}

function updateLocalStorageProduct(product) {
    try {
        let allProducts = getLocalStorageProducts();
        let productIndex = allProducts.findIndex((p) => p.id == product.id);
        console.log("productIndex", productIndex);
        allProducts[productIndex] = product;
        allProducts[productIndex].datasModificacao = new Date();

        saveProducts(allProducts);
    } catch (e) {
        console.log(e.message);
    }
}

//TODO: testar delProduto, fazer botão de deletar
/**
 * Busca e deleta um produto no LocalStorage
 * @param produto produto Object a ser deletado
 */
function delProduto(produto) {
    try {
        let produtoJson = JSON.stringify(produto);
        let allProducts = localStorage.getItem("products");
        if (!allProducts.includes(produtoJson)) console.log("Não existe!");
        allProducts.replace(produtoJson, "");
        //precisa deletar? localStorage.remove
        localStorage.setItem("products", allProducts);
        pushNotify("Produto deletado");
    } catch (e) {
        console.log("Erro:" + e.message);
        pushNotifyError(e.message);
    }
}

/**
 * Renderiza produtos na página
 * @param produtos Object de produtos a ser renderizado
 */
function loadProdutos(produtos) {
    let products = getLocalStorageProducts();
    //TODO check this function and compare to manoel's
    const produtosDiv = document.getElementById("produtos");
    produtosDiv.innerHTML = "";

    if (products.length === 0) {
        produtosDiv.innerHTML = "<p>Nenhum produto cadastrado</p>";
    }

    products.forEach((produto) => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto");

        const conteudoProduto = `
          <img src="${produto.src}">
          <p style="display: none"><strong>id:</strong> ${produto.id}</p>
          <p><strong>Nome:</strong> ${produto.nome}</p>
          <p><strong>Categoria:</strong> ${produto.categoria}</p>
          <p><strong>Quantidade:</strong> ${produto.quantidade}</p>
          <p><strong>Preço:</strong> $${Number(produto.preco).toFixed(2)}</p>
<!--          <button onclick="alterarProduto('${produto.id
            }')" id="alterarProduto" style="flex-shrink: initial; max-width: fit-content">Alterar</button>-->
          <button onclick="alterProduct('${produto.id
            }')" id="alterarProduto" style="flex-shrink: initial; max-width: fit-content">Alterar</button>
          <button onclick="delProduto(${produto})" id="delProduto" style="flex-shrink: initial; max-width: fit-content; background-color: red">Deletar</button>

<!--          <input class="modal-state" id="modal-1" type="checkbox" />-->
          

        `;

        produtoDiv.innerHTML = conteudoProduto;

        produtosDiv.appendChild(produtoDiv);
    });
}

/**
 * Busca os campos no modal de adicionar produtos e mapeia os atributos em um novo produto.
 * Então, chama a função addProduto para adicionar o produto mapeado no LocalStorage
 */
function mapProduto() {
    const urlElement = document.getElementById("URLImagem");
    const nomeElement = document.getElementById("productName");
    const categoriaElement = document.getElementById("productCategoria");
    const quantidadeElement = document.getElementById("productQuantidade");
    const precoElement = document.getElementById("productPreco");

    const novoProduto = {
        id: 0,
        src: urlElement.value,
        nome: nomeElement.value,
        categoria: categoriaElement.value,
        quantidade: quantidadeElement.value,
        preco: precoElement.value,
        dataCriacao: new Date(),
        datasModificacao: [],
    };
    novoProduto.id = generateId(JSON.stringify(novoProduto));
    addProduto(novoProduto);
}


function generateId(stringProduto) {
    // return "_" + Math.random().toString(36).substring(2, 9);
    let hash = 0;
    let i, ch;
    if(stringProduto.length === 0) return hash;
    for(i = 0; i < stringProduto.length; i++){
        ch = stringProduto.charCodeAt(i);
        hash = ((hash << 5) + hash) + ch;
        hash = hash & hash;
    }
    return hash;
}
loadProdutos(getLocalStorageProducts()); //renderiza os produtos na página

// localStorage.clear()
