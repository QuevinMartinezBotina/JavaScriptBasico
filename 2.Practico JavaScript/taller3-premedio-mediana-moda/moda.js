const list = [1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 4, 5, 6, 7, 7, 8];

const listCount = {};

/* Aqui mapeamso nuestro array
    -De esta forma por cada número
    se muestra la cantidad de veces 
    encontro en el array
    1:6 veces
    2:3 veces
    etc
*/
list.map(
    function (elemento) {
        if (listCount[elemento]) {
            listCount[elemento] += 1;
        } else {
            listCount[elemento] = 1;
        }
    }
);

const listArray = Object.entries(listCount).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1]
    }
);

const moda = listArray[listArray.length - 1];