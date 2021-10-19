//**Default params antes de es6 🥱
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//**Default params con es6 💪

function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
};

newFunction2("quevin", 20, "COL");


//** Concatenar variables antes de es6 🥱

let hello = "Hello";
let word = "word";

let helloword = hello + " " + word;
console.log(helloword);

//Con es6 💪
let helloword2 = `${hello} ${word}`;
console.log(helloword2);


//*!----------- LET y CONST, Multilínea, Spread Operator y Desestructuración ----------*/


//**multi linea
let lorem = "lorem30 dsadas sa a sa sa asd a d \n"
    + "fras eepica";

//es6
let lorem2 = `otras frase epica que necesitamos
ahora es otra frase eqipica`;

console.log(lorem);
console.log(lorem2);

//**destructuración de elementos

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'COL'
}

console.log(person.name, person.age);

//es6
let { name, age, country } = person;
console.log(name, age);


//**Operador de propagación 
let team1 = ['oscar', 'julina', 'ricardo'];
let team2 = ['valeria', 'yesica', 'camila'];

//**puedo con esto unir elementos de una forma mas amigable
let education = ['david', ...team1, ...team2];

console.log(education);


/* let y const */

{
    var globalVar = 'global var';
}

{
    let globalLet = 'global let';
    console.log(globalLet);
}

console.log(globalVar);

//es una constante que no cambia su valor
const a = 'a';
a = 'b';

console.log(a);


//*!------------- Arrow Functions, Promesas y Parámetros en objetos -------------*/

let name = "Quevin"
let age = 20;

//**OBJETOS

//es5
obj = { name: name, age: age };

//es6
obj2 = { name, age };

console.log(obj);
console.log(obj2);


//**FUNCIONES DE TIPO FLECHA 

const names = [{ name: 'Oscar', age: 32 }, { name: 'Quevin', age: 20 }]

let listOfName = names.map(function (item) {
    console.log(item.name);
})

//es6
let listOfnames2 = names.map(item => console.log(item.name, item.age));

const listOfName3 = (name, age, country) => {
    //codigo para esto
};

const listOfName4 = name => {
    //codigo para esto
}

const square = num => num * num;



//**PROMESAS (SIRVE PARA MANEJAR ASINCRONISMO)

const helloPromise = () => {
    return new Promise((resuelto, noresuelto) => {
        if (true) {
            resuelto('Hey! como se prometio, se resolvio');
        } else {
            noresuelto('Ups!! Prometimos resolverlo, pero no se pudo');
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));


//*! -------------- Clases, Módulos y Generadores ------------------*/

//**clases
class calculator {

    construct() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

}

const calc = new calculator();
console.log(calc.sum(1, 2));

//**poder importar un modulo para usarlo

//es5
const hello = require('./module')

console.log(hello())

//es6
import { hello } from "./module";

console.log(hello());


//**GENERADORES

function* helloword() {
    if (true) {
        yield 'hello, ';
    }

    if (true) {
        yield 'word';
    }
};

const generatorHelloWord = helloword();

console.log(generatorHelloWord.value);
console.log(generatorHelloWord.next().value);
console.log(generatorHelloWord.next().value);
console.log(generatorHelloWord.next().value);