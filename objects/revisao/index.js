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
