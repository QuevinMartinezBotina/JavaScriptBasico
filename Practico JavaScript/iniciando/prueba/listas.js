/* 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. */
var frutas = ["pera", "manzana", "sandia"];

function selectArray(array) {

    this.array = array;

    return console.log(array[0]);
}

var fruta = new selectArray(frutas);

/* 3️⃣ Crea una función que pueda recibir cualquier array como parámetro
 e imprima todos sus elementos uno por uno (no se vale imprimir el array
    completo). */

var frutas = ["pera", "manzana", "sandia"];

function recorrerArray(array) {

    this.array = array;

    for (let index = 0; index <= array.length; index++) {
        console.log(array[index]);
    };

}

var recorrer = new recorrerArray(frutas);

/*4️⃣ Crea una función que pueda recibir cualquier objeto como 
parámetro e imprima todos sus elementos uno por uno (no se vale imprimir
 el objeto completo).  */

var objetoCelular = {
    marca: "Samsung",
    modelo: "Galaxy S9",
    year: 2001
}

function recorrerObjeto(objeto) {

    for (const key in objeto) {
        console.log(objeto[key]);
    }
}

var Objeto = new recorrerObjeto(objetoCelular);