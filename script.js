
/**
 * Realiza login do usuáro  
 */
function login() {
    const email = document.getElementById('login').value;
    if(!isEmail(email)) {
        const msg = 'Endereço de email inválido'
        alert(msg); //TODO:
        throw new Error(msg);
    }
    const senha = document.getElementById('senha').value;
    const chaoSenha = 5, tetoSenha = 25;
    if(!passwordInRange(senha.length,chaoSenha,tetoSenha)){ //a senha deve ter um minimo e max de char
        const msg = `Digite uma senha entre ${chaoSenha} e ${tetoSenha}`;
        alert(msg); //TODO:
        throw new Error(msg);
    } 

    //TODO:controle de entrada
    
    
}

/**
 * Checa se senha está no alcance definido 
 * @param {number} senhaLength tamanho senha
 * @param {number} chaoSenha tamanho minimo da senha
 * @param {number} tetoSenha tamanho máximo da senha
 * @returns {Bool}   //true se a senha está entre o alcance definido. false se não.
 */
function passwordInRange(senhaLength,chaoSenha,tetoSenha){
    return(senhaLength >= chaoSenha && senhaLength<=tetoSenha);
}

/**
 * checa se o parâmetro é um email válido 
 * @param {string} email possível email 
 * @returns {Bool} true se for email válido. false se não.
 */
function isEmail(email){
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ); //expressao regular para checagem de email
}


//Funções usadas na gallery


/**
 * Imagem representa uma imagem que será por padrão aleatória.
 * @constructor recebe um id para gerar uma imagem aleatória.
 */
class Imagem {
    constructor(id) {
        this.id = id;
        this.src = `https://picsum.photos/200/300?random=${id}`;
        this.nome = `Imagem ${id}`;
    }
    /**
     * muda a imagem, alterando a fonte desta
     * @param {string} newSource a nova fonte da imagem 
     */    
    set setImgSource(newSource){
        this.src = newSource;
    }
}

function loadImage(imagem){
    const imgElement = document.createElement('img');
    imgElement.src = imagem.src;
    imgElement.alt = imagem.nome;
    document.querySelector('#imagem').appendChild(imgElement);
}

/**
 * Renderiza N imagens aleatórias 
 * @param {number} N 
 */
function RenderNRandomImages(N){ //TODO: fix
    for(let i = 1; i <= N; i++){
        let imagem = new Imagem(i);
        loadImage(imagem);
    }
}

RenderNRandomImages(4);


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

document.getElementById('btn-login').onclick = login;

