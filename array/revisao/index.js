const comidas = ["Lasanha", "Batata", "Bacon"];

console.log(comidas[2]);

comidas.forEach((comida, position) => {
    console.log(`Na posição ${position}, temos a comida ${comida}`)
});

// concat():
let outrasComidas = comidas.concat("Jiló");
console.log(comidas);
console.log(outrasComidas);

// join():
let stringDoArray = comidas.join(", ")
console.log(stringDoArray);

// shift():
console.log(comidas.shift());
console.log(comidas)

// pop():
console.log(comidas.pop());
console.log(comidas);

// unshift():
comidas.unshift("Macarrão");
console.log(comidas);

// push():
comidas.push("Estrogofone");
console.log(comidas);

// reverse():
comidas.reverse();
console.log(comidas);

// slice():
let cortarAlimentos = comidas.slice(1, 2);
console.log(cortarAlimentos);

// splice():
comidas.splice(2, 0, "Alface");
console.log(comidas);

// sort():
comidas.sort();
console.log(comidas);

// indexOf():
console.log(comidas.indexOf("Batata"));

// lastIndexOf():
comidas.push("Batata");
console.log(comidas);
console.log(comidas.lastIndexOf("Batata"));

// map():
let mapArray = comidas.map((comida) => `${comida} gostosa`);
console.log(comidas);
console.log(mapArray);

// filter():
let arrayProcura = comidas.filter((comida) => comida === "Batata");
console.log(arrayProcura);

// reduce():
let juntaComida = comidas.reduce((esq, dir) => {
    return `${esq} e ${dir}`
});
console.log(juntaComida);

// find():
const numeros = [1, 2, 3, 4, 5];
console.log(numeros.find(numero => numero === 3));

// findIndex():
console.log(numeros.findIndex(numero => numero === 3));

// every():
menorQueDez = (algumValor) => algumValor < 10;

console.log(numeros.every(numero => menorQueDez(numero)));