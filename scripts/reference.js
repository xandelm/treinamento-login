// function alterarProduto(produto) {
//     const modal = document.createElement('div');
//     modal.classList.add('modal');
//     modal.id = 'modal';
//     modal.hidden = false; // Display the modal
//
//     modal.innerHTML = `
//         <div class="modalContent">
//             <span class="close" onclick="fecharModal()">&times;</span>
//             <h2>Detalhes do Produto</h2>
//             <p><strong>Nome:</strong> ${produto.nome}</p>
//             <p><strong>Categoria:</strong> ${produto.categoria}</p>
//             <p><strong>Quantidade:</strong> ${produto.quantidade}</p>
//             <p><strong>Preço:</strong> $${produto.preco.toFixed(2)}</p>
//         </div>
//     `;
//
//     document.body.appendChild(modal);
// }

// function fecharModal() {
//     const modal = document.getElementById('modal');
//     if (modal) {
//         modal.hidden = true;
//         document.body.removeChild(modal);
//     }
// }


// const conteudoProduto = `
//     <img src="${produto.src}">
//     <p><strong>Nome:</strong> ${produto.nome}</p>
//     <p><strong>Categoria:</strong> ${produto.categoria}</p>
//     <p><strong>Quantidade:</strong> ${produto.quantidade}</p>
//     <p><strong>Preço:</strong> $${produto.preco.toFixed(2)}</p>
//     <button onclick="alterarProduto(${JSON.stringify(produto)})" id="alterarProduto" style="flex-shrink: initial; max-width: fit-content">Alterar</button>
// `;

//previous:
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
          <button onclick="alterarProduto(${produto})" id="alterarProduto" style="flex-shrink: initial; max-width: fit-content">Alterar<input class="modal-state" id="modal-1" type="checkbox" />
    <div class="modal">
      <label class="modal__bg" for="modal-1"></label>
      <div class="modal__inner" style="display: flex; flex-direction: column">
        <label class="modal__close" for="modal-1"></label>
        <h2>Adicionar produto</h2>
<!--        <p><img src="https://i.imgur.com/HnrkBwB.gif" alt="" />Aliquam in sagittis nulla. Curabitur euismod diam eget risus venenatis, sed dictum lectus bibendum. Nunc nunc nisi, hendrerit eget nisi id, rhoncus rutrum velit. Nunc vel mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam fringilla quis nisi eget imperdiet.</p>-->
          <input type="url" id="URLImagem" placeholder="URL imagem">
          <input type="text" id="productName" placeholder="Nome do Produto">
          <input type="text" id="productCategoria" placeholder="Categoria">
          <input type="text" id="productQuantidade" placeholder="Quantidade Disponível">
          <input type="number" id="productPreco" placeholder="Preço">
          <button id="addProduct" style="flex-shrink: initial; max-width: fit-content">Adicionar</button>
      </div>
    </div>
        `;

        function alterarProduto(produto){
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.id = 'modal';
            modal.hidden = true;

            modal.innerHTML = `
  <div class="modalContent">
    <span class="close">&times;</span>
    <h2></h2>
    <p></p>
  </div>
`;

            modal.querySelector('.close').addEventListener('click', () => { modal.hidden = true; });
            let produtoJson = JSON.stringify(produto);
            let allProducts = localStorage.getItem('products');

        }
        produtoDiv.innerHTML = conteudoProduto;

        produtosDiv.appendChild(produtoDiv);
    });
}



//now
< !DOCTYPE html >
    <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Inventário de Produtos</title>
                    <style>
        /* Adicione estilos CSS aqui */
                        body {
                            font - family: Arial, sans-serif;
                        margin: 20px;
        }
                    /* Outros estilos necessários */
                    </style>
                </head>
                <body>
                    <!-- Adicione a estrutura HTML aqui -->
                </body>
            </html>


            <!-- Estrutura para a listagem de produtos -->
            <div id="product-list">
                <!-- Os produtos serão exibidos aqui -->
            </div>

            <script>
    // Função para exibir a lista de produtos
                function displayProductList() {
                    // Obtenha os dados de produtos do LocalStorage e exiba na interface
                    // Implemente isso na Etapa 4
                }

    // Função para excluir um produto
                function deleteProduct(productId) {
                    // Implemente isso na Etapa 4
                }

    // Chamada inicial para exibir a lista de produtos
                displayProductList();
            </script>










            <!-- Estrutura para criar um novo produto -->
            <div id="create-product">
                <h2>Criar Novo Produto</h2>
                <input type="text" id="new-product-name" placeholder="Nome do produto" required>
                    <input type="text" id="new-product-category" placeholder="Categoria" required>
                        <input type="number" id="new-product-quantity" placeholder="Quantidade" required>
                            <button onclick="addNewProduct()">Adicionar Produto</button>
                        </div>

                        <script>
    // Função para adicionar um novo produto
                            function addNewProduct() {
                                // Implemente isso na Etapa 4
                            }
                        </script>


{/*  */}




                        <script>
    // Função para adicionar um novo produto
                            function addNewProduct() {
        const productName = document.getElementById('new-product-name').value;
                            const productCategory = document.getElementById('new-product-category').value;
                            const productQuantity = document.getElementById('new-product-quantity').value;

                            // Validar os dados (adicionar sua própria validação conforme necessário)

                            const product = {
                                id: Date.now(), // Gerar um ID único baseado no timestamp
                            name: productName,
                            category: productCategory,
                            quantity: parseInt(productQuantity),
                            createdDate: new Date().toLocaleString(),
                            updatedDate: null
        };

                            // Obter os produtos existentes do LocalStorage
                            let products = JSON.parse(localStorage.getItem('products')) || [];

                            // Adicionar o novo produto à lista de produtos
                            products.push(product);

                            // Atualizar o LocalStorage com a nova lista de produtos
                            localStorage.setItem('products', JSON.stringify(products));

                            // Atualizar a exibição da lista de produtos
                            displayProductList();

                            // Limpar os campos após a adição do produto
                            document.getElementById('new-product-name').value = '';
                            document.getElementById('new-product-category').value = '';
                            document.getElementById('new-product-quantity').value = '';
    }

                            // Função para exibir a lista de produtos
                            function displayProductList() {
        const productListContainer = document.getElementById('product-list');
                            productListContainer.innerHTML = ''; // Limpar o conteúdo anterior

                            const products = JSON.parse(localStorage.getItem('products')) || [];

                            for (const product of products) {
            const productDiv = document.createElement('div');
                            productDiv.classList.add('product-item');
                            productDiv.innerHTML = `
                            <img src="image-url-here" alt="Imagem do Produto">
                                <div>
                                    <strong>${product.name}</strong>
                                    <p>Categoria: ${product.category}</p>
                                    <p>Quantidade: ${product.quantity}</p>
                                    <p>Data de Criação: ${product.createdDate}</p>
                                    <p>Data de Atualização: ${product.updatedDate ? product.updatedDate : 'N/A'}</p>
                                </div>
                                <button onclick="deleteProduct(${product.id})">Excluir</button>
            `;
            productListContainer.appendChild(productDiv);
        }
    }

    // Função para excluir um produto
    function deleteProduct(productId) {
        let products = JSON.parse(localStorage.getItem('products')) || [];

        // Filtrar os produtos, excluindo o produto com o ID fornecido
        products = products.filter(product => product.id !== productId);

        // Atualizar o LocalStorage com a nova lista de produtos
        localStorage.setItem('products', JSON.stringify(products));

        // Atualizar a exibição da lista de produtos
        displayProductList();
    }

    // Chamada inicial para exibir a lista de produtos
    displayProductList();
</script>












                        <script>
    // Função para exibir os detalhes do produto
                            function displayProductDetails(productId) {
        const products = JSON.parse(localStorage.getItem('products')) || [];

        const product = products.find(product => product.id === productId);

                            if (product) {
                                // Implemente a exibição dos detalhes do produto conforme sua preferência
                                console.log('Detalhes do Produto:', product);
        }
    }

                            // Função para editar as informações do produto
                            function editProduct(productId) {
        const products = JSON.parse(localStorage.getItem('products')) || [];

        const product = products.find(product => product.id === productId);

                            if (product) {
            const updatedProductName = prompt('Digite o novo nome do produto:', product.name);
                            const updatedProductCategory = prompt('Digite a nova categoria do produto:', product.category);
                            const updatedProductQuantity = prompt('Digite a nova quantidade do produto:', product.quantity);

                            // Validar os dados (adicionar sua própria validação conforme necessário)

                            // Atualizar as informações do produto
                            product.name = updatedProductName;
                            product.category = updatedProductCategory;
                            product.quantity = parseInt(updatedProductQuantity);
                            product.updatedDate = new Date().toLocaleString();

                            // Atualizar o LocalStorage com as informações atualizadas
                            localStorage.setItem('products', JSON.stringify(products));

                            // Atualizar a exibição da lista de produtos
                            displayProductList();
        }
    }
                        </script>


// modal
// Get a reference to the "Adicionar" button
const addProductButton = document.getElementById('addProduct');

// Add an event listener to handle the click event on the "Adicionar" button
addProductButton.addEventListener('click', () => {
// Get a reference to the checkbox element controlling the modal
const modalCheckbox = document.getElementById('modal-1');

// Uncheck the checkbox to close the modal
modalCheckbox.checked = false;
});

