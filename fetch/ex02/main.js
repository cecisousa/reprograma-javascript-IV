const cepInput = document.getElementById("cep");
const logradouro = document.getElementById("logradouro")
const complemento = document.getElementById("complemento")
const bairro = document.getElementById("bairro")
const localidade = document.getElementById("localidade")
const uf = document.getElementById("uf")

cepInput.addEventListener("blur", () => {
    if (cepInput.value) {
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()
        }).then(json => {
            // console.log(json)
            logradouro.value = json.logradouro
            complemento.value = json.complemento
            bairro.value = json.bairro
            localidade.value = json.localidade
            uf.value = json.uf
        })
    }
})

// Outra forma de resolver:

// cepInput.addEventListener("blur", () => {
//     if (cepInput.value) {
//         fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
//             return response.json()
//         }).then(json => {
//             preencheInputs(json);
//         })
//     }
// })

// preencheInputs = objeto => {
//     logradouro.value = objeto.logradouro
//     complemento.value = objeto.complemento
//     bairro.value = objeto.bairro
//     localidade.value = objeto.localidade
//     uf.value = objeto.uf
// }
