//Default params antes de es6 🥱
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);
}

//Default params con es6 💪

function newFunction2(name = 'oscar', age = 32, country = "MX") {
    console.log(name, age, country);
};

newFunction2("quevin", 20, "COL");


// Concatenar variables antes de es6 🥱

let hello = "Hello";
let word = "word";

let helloword = hello + " " + word;
console.log(helloword);

//Con es6 💪
let helloword2 = `${hello} ${word}`;
console.log(helloword2);


/* LET y CONST, Multilínea, Spread Operator y Desestructuración */


//multi linea
let lorem = "lorem30 dsadas sa a sa sa asd a d \n"
    + "fras eepica";

//es6
let lorem2 = `otras frase epica que necesitamos
ahora es otra frase eqipica`;

console.log(lorem);
console.log(lorem2);

//destructuración de elementos

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'COL'
}

console.log(person.name, person.age);

//es6
let { name, age, country } = person;
console.log(name, age);


//Operador de propagación 
let team1 = ['oscar', 'julina', 'ricardo'];
let team2 = ['valeria', 'yesica', 'camila'];

//puedo con esto unir elementos de una forma mas amigable
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
