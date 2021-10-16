function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const premedioLista = sumaLista / lista.length;
    return premedioLista;
}
const lista1 = [100, 200, 500, 400000000];

/* reto de ordenar un array */
const nums = [1, 10, 2, 21, 0];
nums.sort(function (a, b) {
    return a - b;
});

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2,
    ]);

    mediana = promedioElemento1y2;

} else {
    mediana = lista1[mitadLista1];
}