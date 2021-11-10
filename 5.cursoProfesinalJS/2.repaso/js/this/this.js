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

//! call, apply y bind
//?Aquí vamos a ver unas funciones que nos sirven para el this, para evitar errores y seleccionar datso especificos

function saludar() {
    console.log(`Hola mi nombre es ${this.name} ${this.lastName}`);
}

//*CALL
//?Aquí le decimos que valor queremos que sea this
const duki = {
    name: "Duki",
    lastName: "Picante",
}
saludar.call(duki);

function caminar(metros, direction) {
    console.log(`${this.name} camina ${metros} metros, hacia el ${direction}`);
}

caminar.call(person, 400, "Norte");

//*APPLY
//?Este es igual que call, pero los parametros se pasan con [] como un arreglo
caminar.apply(person, [500, "Sur"]);


//*BIND
//?Bind no llama automaticmanete a la fucnión, construye uan nueva función.
const riata = {
    name: "Riata",
    lastName: "Rodriguez",
}
const personSaluda = saludar.bind(riata);
personSaluda();

const personCamina = caminar.bind(riata, 3000, "NorOeste")
personCamina();

//!Cuando desatamos un evento mediante un boton
//?Cuando apsa esto, no funciona de forma adecuada ya que los button tienen cierto truco
const buttons = document.getElementsByClassName("call-to-action");

/* buttons.forEach(button => {
    button.onclick = () => console.log("Nunca pares de aprender");
}); */

//*nodelist
Array.prototype.forEach.call(buttons, button => {
    button.onclick = () => console.log("Nunca pares de aprender");
});