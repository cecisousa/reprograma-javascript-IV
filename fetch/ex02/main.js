const cepInput = document.getElementById("cep");
const logradouroInput = document.getElementById("logradouro");
cepInput.addEventListener("blur", () => {
    if (cepInput.input) {
        fetch(`https://viacep.com.br/ws/${cepInput.nodeValue}/json`).then(response => {
            return response.json()
        }).then(json => {
            // fazer aparecer os valores do input
        })
    }
})
