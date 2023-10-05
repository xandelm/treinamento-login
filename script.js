function login() {
    const email = document.getElementById('login').value;
    if(!isEmail(email)) {
        const msg = 'Endereço de email inválido'
        throw new Error(msg);
        alert(msg);
    }
    const senha = document.getElementById('senha').value;
    const chaoSenha = 5, tetoSenha = 25;
    if(!passwordInRange(senha.length,chaoSenha,tetoSenha)){
        const msg = `Digite uma senha entre ${chaoSenha} e ${tetoSenha}`;
        throw new Error(msg);
        alert(msg);
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

document.getElementById('btn-login').onclick = login;

