const nums1 = [1, 1, 2, 3, 4, 5, 5, 6, 7, 5, 4, 3, 4, 6, 7];
const nums2 = [1, 1, 2, 3, 4, 4, 5, 5, 5, 5, 8];

const numsCount = {};

function calcularModa(array) {

    /* 
    -Se cuenta cuantas veces se repite un número
    y se guardar en una posición del objeto
    */
    array.map(function (num) { //map es como un for each
        if (numsCount[num]) {
            numsCount[num] += 1;
        } else {
            numsCount[num] = 1;
        }
    });

    /*
    Aquí convertimos el objeto a array 
    y ordenamos de menor a mayo
    */
    const numsArray = Object.entries(numsCount).sort(
        function (a, b) {
            //Aquí le ponemos por qué número queremos ordenar
            return a[1] - b[1];
        });
    /* 
        Aquí retornamso el ultimo número del array
        que es el más grandem, retsamso 1 porque
        en el array se empieza desde 0
    */
    const modaNums = numsArray[numsArray.length - 1];
    return modaNums;
}

function verModaArray() {
    const inputArray = document.getElementById("inputArray");
    const campoModa = document.getElementById("resultModa");

    const arrayValue = inputArray.value;

    /* const resultadoModa = calcularModa(arrayValue); */

    campoModa.innerHTML = "<p>" + typeof (arrayValue) + "</p>";


}

function holi() {
    const campoModa = document.getElementById("resultModa");
    campoModa.innerHTML = "<p> holi </p>";
}