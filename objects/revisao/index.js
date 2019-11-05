function Professor (nome, sobrenome, materia) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.materia = materia;
}

const prof1 = new Professor("Ana", "Paula", "Química");
const prof2 = new Professor("Bia", "Silva", "Física");

console.log(prof1);
console.log(prof2);

Professor.prototype.dizMateria = function() {
    return `A matéria ministrada por ${this.nome} é ${this.materia}`
}

console.log(prof1.dizMateria());
console.log(prof2.dizMateria());

// na função abaixo, estamos realizando polimorfismo ao sobrescrever dizMateria();
prof2.dizMateria = function() {
    return `A matéria ministrada por ${this.nome} ${this.sobrenome} é ${this.materia}`
}

console.log(prof1.dizMateria());
console.log(prof2.dizMateria());

// ---//---

// Conceitos de herança:

const avo = { attr1: "A"}
const mae = {__proto__:avo, attr2: "B", attr3: "E"}
const filha = {__proto__:mae, attr3: "C"}
console.log(filha.attr1, filha.attr2, filha.attr3)

class Avo {
    constructor(sobrenome = "Rodrigues"){
        this.sobrenome = sobrenome;
    }
}

class Mae extends Avo {
    constructor(sobrenome, profissao="Cineasta") {
        super(sobrenome);
        this.profissao = profissao;
    }
}

class Filha extends Mae {
    constructor(){
        super("Silva")
    }
}

const novaFilha = new Filha();
novaFilha.profissao = "Atriz";
console.log(novaFilha);
const novaMae = new Mae ();
console.log(novaMae);

