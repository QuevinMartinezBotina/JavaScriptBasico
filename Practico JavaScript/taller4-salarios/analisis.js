/* Recorremos el array */
const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

/* Ordenamos los salarios */
const salariosColSorted = salariosCol.sort(
    function (a, b) {
        return a - b;
    }
);

/* Vemos si es par  helpers*/
function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const premedioLista = sumaLista / lista.length;
    return premedioLista;
}

const medianaGeneralCol = medianaSalarios(salariosColSorted);

/* Calculamos la mediana general */
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const perosonitaMitad1 = lista[mitad - 1];
        const perosonitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([perosonitaMitad1, perosonitaMitad2]);

        return mediana;

    } else {
        const perosonitaMitad = lista[mitad];
        return perosonitaMitad;
    }
};

/* Calcular mediana del top 10% salarios */
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

//Separar uan parte del array
const salariosColTop10 = salariosColSorted.splice(spliceStart, spliceCount, );

const medianaColTop10 = medianaSalarios(salariosColTop10);

console.log({
    medianaColTop10,
    medianaGeneralCol
});