/* Que de forma automatica se contruyan autos con construct y un loop */
var cantidad = prompt("¿Cuantos autos quieres crear?");

function auto(marca, model, year) {
    this.marca = marca;
    this.model = model;
    this.year = year;
}

for (let index = 1; index <= cantidad; index++) {
    var car = "car " + index;
    var marca = "marca " + index;
    var modelo = "modelo " + index;
    var year = "200" + index;

    car = new auto(marca, modelo, year);

    console.log(car);
}