const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const btnSubmit = document.getElementById("btn-submit");

// btnSubmit.addEventListener("click", function(e){
//     e.preventDefault();
//     let body = JSON.stringify({
//         title: titulo.value,
//         body: descricao.value,
//         userId: 1
//     })
//     fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         }, 
//         body 
//     }).then(response => response.json()).then(json => console.log(json))
// });

// Segunda versão, enviando um comentário:

btnSubmit.addEventListener("click", function(e){
    e.preventDefault();
    let body = JSON.stringify({
        name: "Ceci Sousa",
        email: "ceci@gmail.com",
        body: "Estou enviando um comentário",
        userId: 1
    })
    fetch("https://jsonplaceholder.typicode.com/comments", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        }, 
        body 
    }).then(response => response.json()).then(json => console.log(json))
});

// OBS.: É preciso ver na API quais itens são obrigatórios na construção do 'body'
