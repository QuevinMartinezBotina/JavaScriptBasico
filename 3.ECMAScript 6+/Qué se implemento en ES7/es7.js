//**INCLUDE */
//?Con este podemos buscra un valor dentro d eun array y nos dice true o false

let numbers = [1, 2, 3, 7, 8, 9];

if (numbers.includes(9)) {
    console.log(`Si se encontro el número`);
} else {
    console.log('No se encontro el número');
};

//**Operador de Exponenciación (numX**elevadoX)
//?Con este lo que conseguimos es poder elevar un úmeor a cualquier potencia solo usando doble asterisco **

let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result);