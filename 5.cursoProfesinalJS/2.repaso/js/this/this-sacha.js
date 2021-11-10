function saludar(nom) {
    console.log(`hola ${nom}`);
}

const persona = {
    name: 'quevin',
    saludar: function () {
        console.log(`Hola ${this.name}`);
    },
    saludar2: () => console.log(`Hola soy ${this.name}`),
};

//*saludra normal
//persona.saludar();

//*guardandolo dentro de uan varible
const saluda = persona.saludar;
//saluda();

//*con un evento
const boton = document.querySelector("#miBoton");
boton.addEventListener('click', persona.saludar);

//!tipso de enlazamientos de binding
//?Esto es como darle un valor al this cuando no hay algo definido, js le asigna algo solo

//*Default Binding (invocación Directa)
'use strict'

function quienSoy() {
    console.log(`Hola, yo soy: `, this);
}

//quienSoy();

//*Implicit binding
//?enlazamiento implicito, este hace que la primer instancia al lado izquierdo del putno . sea la que toma para traer datos
const sacha = {
    name: "sacha",
    saludar: function () {
        console.log(`Hola me llamo ${this.name}`);
    },
    hermano: {
        name: "eric",
        saludar: function () {
            console.log(`Hola, yo el hermano, me llamo ${this.name}`);
        },
    },
};

//sacha.saludar();
//sacha.hermano.saludar();

//*Combinando Default he Implicit
'use strict'

const sacha2 = {
    name: "sacha",
    twitter: "@sachalifs",
    saludar: function () {
        console.log(`Hola soy ${this.name}`);
        this.saludarTwitter();
    },
    saludarTwitter: function () {
        console.log(`Seguime en twitter ${this.twitter}`);
    }
};

//sacha2.saludar();

//!Explicit binging
//?Sirve para que nosotros elijamos que obejto queremos que sea this cuando se ejecuta un función
const quevin = {
    name: 'Quevin',
    saludar: function (gritando, conDespedida) {
        const saludoNormal = `Hola, me llamo ${this.name}!`;
        const despedidaNormal = 'Chau!';

        const saludo = gritando ? saludoNormal.toUpperCase() : saludoNormal;
        const despedida = gritando ? despedidaNormal.toUpperCase() : despedidaNormal;

        console.log(saludo);

        conDespedida ? console.log(despedida) : console.log();;
    },
};

//quevin.saludar(true, true);
const pepe = {
    name: 'pepe'
};

//*call
//?bueno aquí queremos usar el slaudo pero con otro nombre, sin alterar mi objeto, para eso **CALL** 
quevin.saludar.call(pepe, true, true);

//*apply
quevin.saludar.apply(pepe, [true, true]);


//!Slaudar con evento y bind
//?Nos retorna una nueva fucnión con el evento elazado al objeto que le digamos
const personaEvent = {
    name: 'quevin',
    saludar: function () {
        console.log(`Hola ${this.name}`);
    },
    saludar2: () => console.log(`Hola soy asdsa ${this.name}`),
};
//*con un evento
const botonEvent = document.querySelector("#miBotonEvent");
botonEvent.addEventListener('click', personaEvent.saludar.bind(personaEvent));


//!NEW BINDING (instanciar objeto)
class personNewbinding {
    constructor(name) {
        this.name = name;
    }
}

const quevinNew = new personNewbinding('Quevin');

//!Lexical Binding (Arrow functions)
//?Tiene que ver con como escribimos las funciones

'use strict'

const personLexical = {
    name: "sachaLexical",
    twitter: "@sachalifs",
    saludar: function () {

        const seguimeTwitter = () => {
            console.log(`Seguime en Twitter: ${this.twitter}`);
        }

        console.log(`Hola me llami ${this.name}`);
        seguimeTwitter();
    }
};

personLexical.saludar();