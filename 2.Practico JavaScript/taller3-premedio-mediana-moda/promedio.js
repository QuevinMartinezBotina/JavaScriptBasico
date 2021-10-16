const lista1 = [100, 200, 300, 500];



function calcularMediaAritmetica(lista) {
    /*let sumaLista = 0;

    for (let index = 0; index < lista.length; index++) {
        sumaLista = sumaLista + lista[index];
    } */

    /* REDUCE
        -Es uan función iguala for, pero mucho más sencilla
    */
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const premedioLista = sumaLista / lista.length;

    return premedioLista;
}