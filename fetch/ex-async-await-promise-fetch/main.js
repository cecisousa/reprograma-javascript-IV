// Fazer a chamada usando fetch para pegar uma imagem
// Colocar a imagem criando uma tag img no body
// Lidando com erros

// fetch("rainbow.jpg").then(response => {
//     console.log(response)
//     return response.blob()
// }).then(blob => {
//     console.log(blob)
//     document.getElementById("rainbow").src = URL.createObjectURL(blob);
// }).catch(error => {
//     console.log(error)
// })

// async await

// async function pegarImagem(){
//     const response = await fetch("rainbow.jpg");
//     const blob = await response.blob();
//     console.log(response)
//     console.log(blob)
//     document.getElementById("rainbow").src = URL.createObjectURL(blob);
// }

// pegarImagem().then(() => console.log("Imagem carregada!")).catch(() => console.log("Imagem não carregada"))

// try catch

async function pegarImagem(){
    try {
        const response = await fetch("rainbow.jpg");
        if (!response.ok) throw "Não funcionou"
        const blob = await response.blob();
        console.log(response)
        console.log(blob)
        document.getElementById("rainbow").src = URL.createObjectURL(blob);
    } catch (e) {
        console.log(e)
    }
}

pegarImagem().then(() => console.log("Imagem carregada!")).catch(() => console.log("Imagem não carregada"))
