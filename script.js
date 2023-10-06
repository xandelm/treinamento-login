function login() {
    const email = document.getElementById('login').value;
    if(!isEmail(email)) {
        const msg = 'Endereço de email inválido'
        alert(msg);
        throw new Error(msg);
    }
    const senha = document.getElementById('senha').value;
    const chaoSenha = 5, tetoSenha = 25;
    if(!passwordInRange(senha.length,chaoSenha,tetoSenha)){
        const msg = `Digite uma senha entre ${chaoSenha} e ${tetoSenha}`;
        alert(msg);
        throw new Error(msg);
    } 

    //TODO:controle de entrada
    
    
}

function passwordInRange(senhaLength,chaoSenha,tetoSenha){
    return(senhaLength >= chaoSenha && senhaLength<=tetoSenha);
}

function isEmail(email){
    return String(email)
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}

function printConsole(stringParameter){
    console.log(stringParameter);
}

function loadImage(id){
    const imagem = new Imagem(id);
    const imgElement = document.createElement('img');
    imgElement.src = imagem.src;
    imgElement.alt = imagem.nome;
    document.querySelector('#imagem').appendChild(imgElement);
}

class Imagem {
    constructor(id) {
        this.id = id;
        this.src = `https://picsum.photos/200/300?random=${id}`;
        this.nome = `Imagem ${id}`;
    }
}

function RenderNImages(N){
    for(let i = 1; i <= N; i++){
        loadImage(i);
    }
}

RenderNImages(4);

document.getElementById('btn-login').onclick = login;

