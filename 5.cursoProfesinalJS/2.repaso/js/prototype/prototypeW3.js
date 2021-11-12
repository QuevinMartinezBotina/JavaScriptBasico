//!PROTOTYPE
//?Vamos a hace runa sprubas de prototype para netederlo mejor

/* const person = {
    name: "Quevin",
    age: 20,
}
person.saludar = function () {
    console.log(`Hola, soy ${this.name}`);
}

person.saludar(); */

//?Vamos a hacer este proceso mas eficiente con POO
/* function Hero(name) {
    const hero = {
        name: name,
    }

    hero.saludar = function () {
        console.log(`Hola, yo soy ${this.name}, vengo a salvar el mundo`);
    }

    return hero;
}

deku = Hero("deku");
deku.saludar(); */

//?Evitemos crear la misma fucnión cada vez
/* const heroMethods = {
    saludar: function () {
        console.log(`Hola, yo soy ${this.name}, vengo a salvar el mundo`);
    }
}

function Hero(name) {
    const hero = {
        name: name,
    }
    hero.saludar = heroMethods.saludar;
    return hero;
}

deku = Hero("deku");
deku.saludar(); */


//!Object.create
/* const heroMethods = {
    saludar: function () {
        console.log(`Hola, yo soy ${this.name}, vengo a salvar el mundo`);
    }
}

function Hero(name) {
    const hero = Object.create(heroMethods);
    hero.name = name;
    return hero;
}

deku = Hero("deku");
deku.saludar(); */

//!Porotype
/* function Hero(name) {
    const hero = Object.create(Hero.prototype);
    hero.name = name;
    return hero;
}

Hero.prototype.saludar = () => console.log(`Hola, yo soy ${this.name}, voy a salvar el mundo.`);

deku = Hero("deku");
deku.saludar(); */

//!new
function Hero(name) {
    //const hero = Object.create(Hero.prototype);
    this.name = name;
    //return hero;
}

Hero.prototype.saludar = () => console.log(`Hola, yo soy ${this.name}, voy a salvar el mundo.`);

deku = new Hero("deku");
deku.saludar();