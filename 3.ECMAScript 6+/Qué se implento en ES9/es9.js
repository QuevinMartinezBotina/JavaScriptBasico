//*OPERADOR DE REPOSO
const obj = {
    name: 'oscar',
    age: 20,
};

let { name, ...all } = obj;
console.log(name, all);



//*PROPIEDADES DE PROPAGANACIÓN
//?con eso podemos inlcuir otros objetos dentro del nuestro y agregarle datos
const obj2 = {
    ...obj,
    country: 'Col',
};

console.log(obj2);


//*PROMIS.FINALLY
//?este nos sirve para que cuanod se termine la promesa independiente de si es correcta o ocurrio un error, 
//?esta al finalizar haga una acción ya se alimpiar los campos o ejecutar algún bloque de código
const helloWord = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('helloword'), 3000)
            : reject(new Error('test error'));
    });
};

helloWord()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('finalizado'))


//*Este es un ejercicio de .FINALLY

const saludar = (nameUser) => {
    return new Promise((resolve, reject) => {
        (true)
            ? resolve(`Holi ${nameUser}, eres asombroso!!`)
            : reject(`Lo siento ${nameUser} no se cumplio la promesa`);
    });
};

saludar('Quevin')
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log(`Finalizado, gracias por usar mi programa`))

//*REGEXDATA
//?Esto nos sirve como en este caso para colocar unas reglas a la hora de ingresar un formato de datos, 
//?El tipo de dato que se va a ingresa, el formato, la longitud, esto es util para que cumplan con un formato establecido
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);