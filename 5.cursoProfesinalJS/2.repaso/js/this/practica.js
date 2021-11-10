//!Este JS es para practicar el CALL, APPLY, BIND de JS

//*** FUNCIONES ****/
function saludar() {
    console.log(`Hola mi nombre es ${this.name} ${this.lastName}`);
};

function caminar(metros, direction) {
    console.log(`Hola mi soy ${this.name} camine ${metros} metros, en dirección ${direction}`);
};

//*******CALL********
//? Call nos sirve para establecr el valor de nuestro this
const person = {
    name: "Quevin",
    lastName: "Martinez",
}

//?object.call(object, param1, param2, ...)
saludar.call(person);

//?Y así sería con argumentos
caminar.call(person, 600, 'sur');


//**********APPLY********/
//?Este es muy similar a call pero a diferencia que los argumentos se pasan como areglo entre []
caminar.apply(person, [2500, 'Norte, Apply']);


//********** BIND ********/
//?Este es un poco a más unico, loq ue hace es que no llama la función si no que el es o crea un función nuev apara mostarr estos datos
const saludoPerson = saludar.bind(person);
saludoPerson();

//?Para pasar parametros, podemos hacerlo con los ()
//todo: Podemos pasar los parametros de seguido en la declaración de la variable, o también podemos pasar una parte y el resto al llamar la función para ser utilisada 
const caminarPerson = caminar.bind(person, 400);
caminarPerson('Nor este, Bind');