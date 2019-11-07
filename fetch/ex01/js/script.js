// Fazer o fetch para carregar o array de cartas

const cardSection = document.getElementById("cards-section");
const errorSection = document.getElementById("error");
const loading = document.getElementById("spinner");

// Caso os cards não carreguem, mostraremos esses dados abaixo:
const placeholderCard = {
    nome: "Carta não carregada",
    tipo: "Arcano Maior",
    descricao: "Sem descrição",
    imagem: "http://via.placeholder.com/250X500",
    link: "https://www.astrolink.com.br/"
}

renderizaCarta = carta => {
    const novaCarta = new Card(carta).render();
    cardSection.innerHTML = novaCarta;
}

// fetch("tarot.json").then(response => {
//     return response.json()
// }).then(json => {
//     console.log(json)
//     renderizaCarta(selecionaCartaAleatoria(json))
// })

// Função para tirar uma nova carta aleatoria
selecionaCartaAleatoria = cartas => {
    let cartaAleatoria = Math.floor(Math.random() * cartas.length);
    return cartas[cartaAleatoria];
}

// Função para ativar o spinner:
function ativaSpinner(){ 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Ativa Spinner")
        }, 3000)
    })
}

// Transformar o fetch em async await
async function carregaCartas() {
    errorSection.innerHTML = "";
    loading.style.display = "block";
    try {
        const response = await fetch("tarot.json");
        if(!response.ok) throw `com o status: ${response.status}`
        const json = await response.json();
        renderizaCarta(selecionaCartaAleatoria(json))
        const espera = await ativaSpinner()
        loading.style.display = "none";
    } catch (e) {
        renderizaCarta(placeholderCard)
        // errorSection.innerHTML = `Não foi possível recarregar a página: ${e}`
        errorSection.innerHTML = `A requisição falhou: ${e}`  
        loading.style.display = "none";      
    }
}

carregaCartas()

novaCarta = () => {
    carregaCartas()
}

