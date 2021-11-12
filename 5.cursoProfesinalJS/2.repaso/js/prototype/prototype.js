//!Vamos a ver de que trata Prototype
//?Prototype es algo muy unico de js, por ello vamos a ver como funciona 

//*Una forma de hacerlo, pero no muy eficiente
/* const hero = {
    name: "Saitama",
}

hero.saludar = function () {
    console.log(`Hola soy ${this.name}`);
}

hero.saludar();

const hero2 = {
    name: "Deku",
}

hero2.saludar = function () {
    console.log(`Hola soy ${this.name}`);
}

hero2.saludar(); */

//*Vamos a mejorar esto y usar una forma más eficiente 
/* function HeroClass(name) {
    const constructor = {
        name: name
    }

    constructor.saludar = function () {
        console.log(`Hola soy ${this.name}`);
    };

    return constructor;
}

const zelda = HeroClass("Zelda");
zelda.saludar(); */

//*Evitar tener que crear la misma función cada vez

/* const heroMethods = {
    saludar: function () {
        console.log(`Hola me mallo ${this.name}`);
    },
}

function HeroClass(name) {
    const constructor = {
        name: name
    }
    constructor.saludar = heroMethods.saludar;
    return constructor;
}

const zelda = HeroClass("Zelda");
zelda.saludar(); */

//*Object Create
//todo: const newObject = Object.create(objeto);
/* const heroMethods = {
    saludar: function () {
        console.log(`Hola me mallo ${this.name}`);
    },
}

function HeroClass(name) {
    const constructor = Object.create(heroMethods);
    constructor.name = name;
    return constructor;
}

const zelda = HeroClass("Senitsu");
zelda.saludar(); */

//*Mejorando Object Create
//todo: const newObject = Object.create(objeto);
/* 
function HeroClass(name) {
    const constructor = Object.create(HeroClass.prototype);
    constructor.name = name;
    return constructor;
}

HeroClass.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.name}`);
}


const zelda = HeroClass("Senitsu");
zelda.saludar(); */

//!New
//?New es un atajo (azucar sintactica) para llevar hero.prototype al objeto

function Hero(name) {
    //const hero = Object.create(Hero.prototype);
    this.name = name;
    //return hero;
}

Hero.prototype.saludar = () => console.log(`Hola, yo soy ${this.name}, voy a salvar el mundo.`);

deku = new Hero("deku");
deku.saludar();


//!Herencia portotipal
const zelda = new Hero("Zelda");
//?Porpiedades de la instancia
console.log("Name:", zelda.name);

//?Propiedades de la clase
console.log("Saludar:", zelda.saludar);

//?Porpiedades ehredadas, ejemplo: ToString
console.log("ToString:", zelda.toString);

//?hasOwnProperty (De donde sale toString o esto?)
console.log(" zelda.hasOwnProperty('saludar'):", zelda.hasOwnProperty('saludar'));