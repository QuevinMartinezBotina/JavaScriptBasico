//!callback
function sum(num1, num2) {
    return num1 + num2;
};

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(6, 2, sum));


//*todo:Ejercicio de callback
//?un ejercicio para entender mejor todo, calcularemos la edad del usuario 
function ageUser(nameUser, presentYear, birthYear) {
    return `hola ${nameUser} tienes ${presentYear - birthYear} años`;
}

function hello(nameUser, presentYear, birthYear, callback) {
    return callback(nameUser, presentYear, birthYear);
}

console.log(hello("Quevin", 2021, 2001, ageUser,));



//!callback con tiempos
function date(callback) {
    console.log(`fecha de date ${new Date}`);
    setTimeout(() => {
        let date = new Date;
        callback(date);
    }, 3000);
}

function printDate(dateNow) {
    console.log(`La fecha de printDate ${dateNow}`);
}

date(printDate);

//*todo:Ejercicio de callback con tiempos
//?un ejercicio para entender mejor todo, calcularemos la edad del usuario y depues de un tiempo cuento tendra el siguinete año

function ageUser(userName, presentYear, birthYear, callback) {
    console.log(`Hola ${userName} tu edad actual es ${presentYear - birthYear} años`);
    setTimeout(() => {
        console.log(callback(presentYear, birthYear));
    }, 3000);
}

function ageUserNextYear(presentYear, birthYear) {
    return `En 5 años tu edad sera ${(presentYear - birthYear) + 5} años`;
};

ageUser("Quevin", 2021, 2001, ageUserNextYear);