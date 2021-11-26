const person = {
    nombre: "",
    apellido: "",
    edad: 0,
    // twitter: "",
}

//?Podemos colocar reglas para que no se altere nuestro objeto base
const manejador = {
    set(obj, prop, valor) {
        if (Object.keys(obj).indexOf(prop) === -1) {
            return console.error(`La propiedad ${prop} no existe`);
        }

        /* if (prop === "nombre" || prop === "apellido") {
            return console.error(`La propieda ${prop} solo acepta letras y espacios en blanco`);
        } */

        obj[prop] = valor;
    }
}

//?Proxy nos ayuda a verificar que uan propiedad existe dentro de un objeto
const jon = new Proxy(person, manejador);
jon.nombre = "Quevin";
jon.apellido = "Martinez";
jon.edad = 20;
jon.twitter = "@quevinmartinez";

console.log(jon);