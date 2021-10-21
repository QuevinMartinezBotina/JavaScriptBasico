//* 🧯 Replace
//?Este nos sirve para reemplazar texto dentro de un string
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replace("JavaScript", "Python");//?Con este reemplazo la 1 coincidencia
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript", "Python");//?Con este reemplazo todas las coincidencias
console.log(replacedString2);



//!---------METODOS PRIVADOS-----!//

//*metodo privado
//?Podemos de esta manera volver el motodo dentro de la class privado
class Message {
    #show(val) {
        console.log(val);
    };
};

const message = new Message();
message.show('hola');

//*promise any
//?Aquí lo que hace es que el primero que resuelva es el que devuelve
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));


//*WEAKREF
class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element);
    }
    {... }
};


//* 🧪 Nuevos operadores lógicos
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);