const helloUser = (userName) => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve(`Hola ${userName}... !`)
            setTimeout(() => {
                console.log(`Espero estes muy bien`)
            }, 2000);
        } else {
            reject(`Lo sentimos ${userName}, no se cumplio la promesa`)
            setTimeout(() => {
                console.log(`En un futuro sera ... !`);
            }, 2000);
        }
    });
}

const ageUser = (presentYear, birhYear) => {
    const yearsOld = presentYear - birhYear;
    return new Promise((resolve, reject) => {
        if (true) {
            resolve(`Your age is ${yearsOld}`);
            setTimeout(() => {
                console.log(`Bay! :D`);
            }, 2000);
        } else {
            reject(`Ups! error`);
        }
    })
}

/* helloUser(`Quevin`)
    .then(response => console.log(response))
    .catch(error => console.log(error));

ageUser(2021, 2001)
    .then(response => console.log(response))
    .catch(error => console.log(error)); */

//?Como ejecutar todas las promesas
Promise.all([helloUser(`Quevin`), ageUser(2021, 2001)])
    .then(response => {
        console.log(`Arrays Results `, response);
    })
    .catch(error => {
        console.log(error)
    });