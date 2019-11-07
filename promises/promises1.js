// Função que retorna uma Promise()
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        if (segundos > 10) {
            reject("Muito tempo para esperar")
        }
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

// Uma vez que a função retorna uma Promise(), posso trabalhar com o then():
falarDepoisDe(3, "Hm, esperei para falar").then(frase => console.log(frase)).catch(e => console.log(e))

// Segundo exemplo:

function assarPizza (segundos) {
    return new Promise((resolve, reject) => {
        if (segundos > 15) {
            reject("A pizza queimou")
        }
        setTimeout(() => {
            resolve("Pizza pronta, nham!")
        }, segundos * 1000)
    })
}

function irPraCasaDosAmigos() {
    cheguei = true;
    return cheguei;
}

function comprarEmOutraLugar() {
    console.log("Tô sem commida, não posso ir sem nada")
}

assarPizza(10).then(resposta => irPraCasaDosAmigos()).then(respostaDosAmigos => console.log(`${respostaDosAmigos ? "Vamos chamar o Uber" : "Calmae, já tô chegando"}`)).catch(erro => comprarEmOutraLugar())

assarPizza(20).then(resposta => console.log(`${resposta} - eba!`)).catch(erro => console.log(`${erro} - droga, não vou pagar por isso pizza!`))

// Revisão sobre operador ternário:

let condicao = true;
console.log(`${condicao ? "Verdade" : "Mentira"}`)