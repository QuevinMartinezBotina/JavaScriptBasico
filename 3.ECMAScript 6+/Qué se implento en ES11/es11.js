//*DINAMIC IMPORT
//?Poder llamar piezas de código para optimizar nuestro proyecto
const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./file.js");
    module.hello();
});



//*BIG INT
//?Este fue agregado para poder trabajar con números mucho mas grandes que los que se manejaban hasta las fechas anteriores
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);



//*PROMIS ALL SETTLED
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 2"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));



//*🌎 GLOBAL THIS
console.log(window);
console.log(globalThis);



//* 🔍 Nuevo operador lógico: null operator
//?Este lo que hace es que del lado izquierod si es null entonces devuelve el del otro lado 
const fooo = null ?? 'default string';
console.log(fooo);

const fooo2 = 'not null' ?? 'default string';
console.log(fooo2)



//*⛓ Optional chaining
//?Con esto podemos hacer que nuestro código no dañe todo, solo que si algo nos irve o hay un erro solo diga "undefined"
const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log('email')
} else {
    console.log('fail')
}