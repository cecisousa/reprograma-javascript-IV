const btn = document.querySelector("button");
const input = document.querySelector("input");
let frutas = ["banana", "morango", "bacurí", "laranja"];

// resolução usando filter() e join():

// btn.addEventListener("click", function(){
//     let frutaBuscada = frutas.filter(fruta => fruta === input.value)
//     if (input.value === frutaBuscada.join()){
//         console.log(frutaBuscada.join());
//     } else {
//         alert(`A fruta ${input.value} não está disponível em nossa lista...`);
//     }
//     input.value = "";
// });

// resolução usando find():

btn.addEventListener("click", function(){
    if (frutas.find(fruta => fruta === input.value)){
        console.log(input.value);
    } else {
        alert(`A fruta ${input.value} não está disponível em nossa lista...`);
    }
    input.value = "";
});