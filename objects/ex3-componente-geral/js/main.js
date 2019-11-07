let resultados = [
    {
        titulo: "Ginger Champagne",
        ingredientes: "champagne, ginger, ice, vodka",
        imagem: "http://img.recipepuppy.com/1.jpg"
    },
    {
        titulo: "Potato and Cheese Frittata",
        ingredientes: "cheddar cheese, eggs, olive oil, onions, potato, salt",
        imagem: "http://img.recipepuppy.com/2.jpg"
    },
    {
        titulo: "Eggnog Thumbprints",
        ingredientes: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        imagem: "http://img.recipepuppy.com/3.jpg"
    },
    {
        titulo: "Succulent Pork Roast",
        ingredientes: "brown sugar, garlic, pork chops, water",
        imagem: "http://img.recipepuppy.com/4.jpg"
    },
    {
        titulo: "Irish Champ",
        ingredientes: "black pepper, butter, green onion, milk, potato, salt",
        imagem: "http://img.recipepuppy.com/5.jpg"
    }
];

const nav = new Navbar();
nav.render();

// Função geral para renderizar cards:
const sectionCards = document.querySelector(".cards");
const carregaCards = (arrayRecebido) => {
    sectionCards.innerHTML = arrayRecebido.map(objeto => {
        return new Card(objeto).render();
    }).join("");
}

// A forma de renderizar abaixo permite que o componente seja adicionado a qualquer elemento, uma vez que estamos declarando isso somente aqui e não direto no componente:
// document.querySelector(".cards").innerHTML = resultados.map((resultado) => {
//     return new Card(resultado).render();
// }).join("");

// Agora utilizando a função geral:
carregaCards(resultados);

// const limpar = (value) => {
//     if(!value) {
//         document.querySelector(".cards").innerHTML = resultados.map((resultado) => {
//             return new Card(resultado).render();
//         }).join("");
//     }
// }

// Versão com função geral para limpar:
const limpar = (value) => {
    if(!value) {
        carregaCards(resultados);
    }
}

// document.querySelector(".button__search").addEventListener("click", function() {
//     let inputValue = document.querySelector(".input__search").value.toUpperCase();
//     let resultadosEncontrados = resultados.filter(resultado => {
//         return resultado.titulo.toUpperCase().includes(inputValue) || resultado.ingredientes.toUpperCase().includes(inputValue);
//     })
//     document.querySelector(".cards").innerHTML = resultadosEncontrados.map((resultado) => {
//         return new Card(resultado).render();
//     }).join("");
// });

// Versão com função geral para filtrar:
document.querySelector(".button__search").addEventListener("click", function() {
    let inputValue = document.querySelector(".input__search").value.toUpperCase();
    let resultadosEncontrados = resultados.filter(resultado => {
        return resultado.titulo.toUpperCase().includes(inputValue) || resultado.ingredientes.toUpperCase().includes(inputValue);
    })
    carregaCards(resultadosEncontrados);
});