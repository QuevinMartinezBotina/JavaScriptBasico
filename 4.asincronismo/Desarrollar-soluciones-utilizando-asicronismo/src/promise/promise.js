const somethiingillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve(`hey! success`);
        } else {
            reject(`Ups!`);
        }
    });
};

/* somethiingillHappen()
    .then(response => console.log(response))
    .catch(error => console.log(error)); */

const somethiingillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve(`true`);
            }, 2000);
        } else {
            const error = new Error(`Ups! error`);
            reject(error);
        }
    });
}

/* somethiingillHappen2()
    .then(response => console.log(response))
    .catch(error => console.log(error)); */

Promise.all([somethiingillHappen(), somethiingillHappen2()])
    .then(response => {
        console.log(`Arrays of results`, response)
    })
    .catch(error => {
        console.log(error);
    })

