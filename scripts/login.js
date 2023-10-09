
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




document.getElementById('btn-login').onclick = login;

