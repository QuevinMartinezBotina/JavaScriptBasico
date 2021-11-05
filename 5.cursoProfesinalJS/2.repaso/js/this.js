//*Uso de uan forma libre
console.log(`this: ${this}`);

function whoIsThis() {
    return this;
}
console.log(`whoIsThis: ${whoIsThis()}`);

//*Uso de forma estricta
function whoIsThisStrict() {
    "use strict";
    return this;
}
console.log(`whoIsThis Strict: ${whoIsThisStrict()}`);

//*This en el contexto de un objeto
const person = {
    name: 'andres',
    saludar: () => console.log(`Hola soy ${person.name}`),
};

/* person.saludar(); */

//*Cuando sacamos una función de un objeto
const accion = person.saludar;
accion();

//*cuando estamos en el constexto de una clase
class Person {
    constructor(name) {
        this.name = name;
    }

    saludar() {
        console.log(`Hola ${this.name} ¿Como estas?`);
    }
}

/* Person.prototype.saludar = function () {
    console.log(`Hola ${this.name} ¿Como estas?`);
} */

const angela = new Person('Angela');
angela.saludar();