const helloUser = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Holi usuario'), 2000)
            : reject(new Error('Error'));
    });
}

const doHelloUser = async () => {
    const something = await helloUser();
    console.log(something + "Do helloUser");
}

console.log('before');
doHelloUser();
console.log('after');


const anotherFunction = async () => {
    try {
        const something = await helloUser();
        console.log(something + " another");
    } catch (error) {
        console.log(error);
    }
}

console.log('before 1');
anotherFunction();
console.log('after 1');