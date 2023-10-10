/**
 * Imagem representa uma imagem que será por padrão aleatória.
 * @constructor recebe um id para gerar uma imagem aleatória.
 */
export class Imagem {
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

/**
 * Renderiza uma imagem no documento 
 * @param {Imagem} imagem 
 */
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

