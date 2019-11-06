// class Card {
//     constructor(resultado) {
//         this.resultado = resultado;
//     }
//     render() {
//         const novoCard = `
//         <div class="card">
//             <img class="imagem" src="${this.resultado.imagem}"/>
//             <h2>${this.resultado.titulo}</h2>
//             <p class="ingredientes">${this.resultado.ingredientes}</p>
//         </div>
//         `
//         document.querySelector(".cards").innerHTML += novoCard;
//     }
// }

// Outra forma de renderizar, porém sem definir onde o componente será adicionado:

class Card {
    constructor(resultado) {
        this.resultado = resultado;
    }
    render() {
        const {
            imagem,
            titulo,
            ingredientes
        } = this.resultado
        return `<div class="card">
            <img class="imagem" src="${imagem}"/>
            <h2>${titulo}</h2>
            <p class="ingredientes">${ingredientes}</p>
        </div>`
    }
}
