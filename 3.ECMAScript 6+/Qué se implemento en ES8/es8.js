//!La versión 8 de Emac Script junio de 2017

//*Object.entries()
//?es una propiedad añadida para objetos, con esta podemos crear una array donde se 
//?muestarn todos los datos de nuestro objeto, con las repectivas keys asignadas

const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//*PADSTART OR PADEND
//?Con esto podemos llenar con un caracter especifico hasta el limite que le asignemos, tipo 
//?llena de * desde campo 1 hasta el campo 22 entonces hasta ese limite lo va a rellenar de *

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));
console.log('food'.padEnd(12, '  -----'));


//*Async Await

const helloWord = () => {
    return new Promise((resolve, reject) => {
        (!true)
            ? setTimeout(() => resolve('hello word, success promise'), 1000)
            : reject(new Error('Test Erroc'));
    });
};

const helloAsync = async () => {
    const hello = await helloWord();
    console.log(hello);
};

helloAsync();


//*Nos permitirá usar trycatch y trabajar los errores correctamente.

const another = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);

    } catch (error) {
        console.log(error);

    }
}

another();