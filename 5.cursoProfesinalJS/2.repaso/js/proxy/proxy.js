const target = {
    red: 'Rojo',
    green: 'Verde',
    blue: 'azul',
}

const handler = {
    get(obj, prop) {

        //debugger;

        if (prop in obj) {
            return obj[prop];
        }

        const suggestion = Object.keys(obj).find(key => {
            return Levenshtein.get(key, prop) < 3;
        })

        if (suggestion) {
            console.log(`${prop} no se encontró. ¿Quisiste decir ${suggestion}?`);
        }

        return obj[prop];

    }
}

const p = new Proxy(target, handler);