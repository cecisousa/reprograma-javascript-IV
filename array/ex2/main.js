const form = document.getElementById("form-do-role");
const input = document.querySelector("input");
const status = document.getElementById("status");

const nomesNoRole =[
'Adriana',
'Adrielly',
'Aline',
'Ana',
'Angelica',
'Ba',
'Babs',
'Carolzinha',
'Carolzona',
'Cecilia',
'Daiana',
'Emanuelle',
'Jackeline',
'Jennifer',
'Josiane',
'Lia',
'Marcela',
'Monique',
'Priscilla Roiz Garcia',
'Priscilla Soares Alves',
'Raissa',
'Raquel',
'Romênia',
'Rosana',
'Simara',
'Simone',
'Talita',
'Telma',
'Thaís',
'Valdeniza']

form.addEventListener("submit", function(e){
    e.preventDefault();
    if (input.value.trim() === "") {
        status.textContent = "Digite um nome válido";
    } else {
        status.textContent = "";
        if (nomesNoRole.find(nome => nome.toLowerCase() === input.value.toLowerCase())){
            alert(`A ${input.value} estava no rolê! :)`);
        } else {
            alert(`A ${input.value} NÃO estava no rolê...`);
        }
    }
    form.reset();
});
