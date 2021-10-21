//!junio 2019 


//!LOS FLAG
//?los flag nos permiten crear un nuevo array con los sud arrays de un array, estos estan en "niveles"
//?estos nieveles es que tan profundo se encuentran en en array
//*ARRAY FLAG
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];


//*FLAG MAP
let array2 = [1, 2, 3, 4, 5];

console.log(array2.flatMap(value => [value, value * 2]));

//*TRIM
//?Esto nos sirve para eliminar los espacios en blanco de una cadena de texto
//?Resulta muy util para no mandar campos de mas ya, que aunque esten en blanco no implica que estos no cuenten.
let hello = '     hello  world ';

console.log(hello);
console.log(hello.trim());

//*TRY CATCH
//?En este el mendaje de error se volvio opcional se puede usar din pasar una parametro de error

//*todo:Antes de es10
try {

} catch (error) {

}

//*todo:Con es10
try {

} catch {
    error
}

//*ENTRIES
let entries = [["ame", "Oscar"], ["age", 32]];

console.log(Object.fromEntries(entries));

//*OBJETO DE TIPO SIMBOLO
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);

console.log(symbol.description);