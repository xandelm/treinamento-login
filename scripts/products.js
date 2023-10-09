//Funções usadas em produto.html

class Produto {
    static idCounter = 0;
    constructor(imagem,nome,categoria,quantidade){
        //TODO: validar dados. talvez criar uma função recebendo os parâmetros, ou validar apenas quando criar novo produto
        idCounter++;
        this.id = idCounter;
        this.imagem = imagem;
        this.nome = nome;
        this.categoria = categoria;
        this.quantidade = quantidade;
        this.dataCriação = Date.now;
        this.datasModificação = new Array();
    }
}



/**
 * Adiciona um Produto no LocalStorage
 * @param {Produto} produto o prod a ser adicionado 
 * @returns {Bool} true caso seja adicionado. false se não.
 */
function addProduto(produto) {
    if(!(produto instanceof Produto)) return false;
    produto.datasModificação.push(Date.now);
    produtoJson = JSON.stringify(produto);
    try{
        localStorage.setItem('id','produtoJson');
        return true;
    }
    catch(e){
        console.log('Erro ao adicionar produto: '+ e.message);
    }
}

//TODO: function (listarProduto): ja feita em renderProdutos
//TODO: function (listarDetalhesProduto)
//TODO: function (atualizarProduto)
//TODO: function (excluirProduto)
function renderProduto(id){
    let produtoString = localStorage.getItem(id);
    let produtoObj = JSON.parse(produtoString);
}


// function renderProdutos(){
    // let numProdutos = localStorage.length;
    // for(let linha = 1; i <= numProdutos; i++){
        // renderProduto(i);
    // }
    // const tabelaProdutosElement = document.createElement('table');
// }
