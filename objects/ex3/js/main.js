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

resultados.map((resultado) => {
    new Card(resultado).render();
});

document.querySelector(".button__search").addEventListener("click", function() {
    let inputValue = document.querySelector(".input__search").value.toUpperCase();
    let resultadosEncontrados = resultados.filter(resultado => {
        return resultado.titulo.toUpperCase().includes(inputValue) || resultado.ingredientes.toUpperCase().includes(inputValue);
    })
    document.querySelector('.cards').innerHTML = "";
    resultadosEncontrados.map(resultado => {
        return new Card(resultado).render()
    }).join("")
    document.querySelector(".input__search").value = "";
});
