const users = [{
  nome: "Lydia Rodrigues",
  imagem: "https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/26166938_1133699003400526_8706692885971000189_n.jpg?_nc_cat=100&_nc_oc=AQkW7DAtsoYgehpYbPuUa0PxGmk28SqRXrmw2w48gPX6k97WEI6te9ZVQykcLeU_8d4&_nc_ht=scontent.fcgh9-1.fna&oh=505e19dc3731aba00e6572c4fb8fce33&oe=5E4C587D"
},
{
  nome: "Doge",
  imagem: "https://images-na.ssl-images-amazon.com/images/I/81-yKbVND-L._SY355_.png"
}]

// class Card {
//   constructor (cor, tamanho, imagem, urlImagem, nome) {
//     this.cor = cor;
//     this.tamanho = tamanho;
//     this.imagem = imagem;
//     this.urlImagem = urlImagem;
//     this.nome = nome;
//   }
//   criaCard() {
//     const novoCard = document.createElement("div");
//     novoCard.setAttribute("class", `${this.cor} ${this.tamanho}`);
//     document.getElementById("cards-section").appendChild(novoCard);
//     const imagem = document.createElement("img");
//     novoCard.appendChild(imagem);
//     imagem.setAttribute("class", `${this.imagem}`);
//     imagem.setAttribute("src", `${this.urlImagem}`);
//     const texto = document.createElement("h2");
//     texto.textContent = `${this.nome}`;
//     novoCard.appendChild(texto);
//   }
// }

// const cardLydia = new Card("green", "avatar", "img-rounded", users[0].imagem, users[0].nome);
// cardLydia.criaCard();

// const cardDoge = new Card("green", "avatar", "img-rounded", users[1].imagem, users[1].nome);
// cardDoge.criaCard();

// Segunda resolução usando Template String:

// class Card {
//   constructor (urlImagem, nome) {
//     this.urlImagem = urlImagem;
//     this.nome = nome;
//   }
//   criaCard() {
//     const novoCard = `
//     <div class="green avatar">
//     <img class="img-rounded" src="${this.urlImagem}">
//     <h2>${this.nome}</h2>
//     </div>
//     `
//     document.getElementById("cards-section").innerHTML += novoCard;
//   }
// }

// const cardLydia = new Card(users[0].imagem, users[0].nome);
// cardLydia.criaCard();

// const cardDoge = new Card(users[1].imagem, users[1].nome);
// cardDoge.criaCard();

// Terceira resolução usando map():

// class Avatar {
//   constructor(usuario) {
//     this.usuario = usuario;
//   }
//   render() {
//     const avatar = `<div class="avatar green">
//     <img class="img-rounded" src="${this.usuario.imagem}" />
//     <h2>${this.usuario.nome}</h2>`
//     document.getElementById("cards-section").insertAdjacentHTML("beforeend", avatar)
//   }
// }

// users.map((user) => {
//   new Avatar(user).render();
// });

// Quarta resolução usando forEach():

class Card {
  constructor (user) {
    this.user = user;
  }
  render() {
    const novoCard = `
    <div class="green avatar">
    <img class="img-rounded" src="${this.user.imagem}">
    <h2>${this.user.nome}</h2>
    </div>
    `
    document.getElementById("cards-section").innerHTML += novoCard;
  }
}

users.forEach(element => {
  new Card(element).render();
});
