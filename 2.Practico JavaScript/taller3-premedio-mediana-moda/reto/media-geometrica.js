const arrayGeometrica = [];

function insertarArray() {
    const viewArray = document.getElementById("viewArray");
    const inputArray = document.getElementById("inputArray");

    const valueArray = parseInt(inputArray.value);

    arrayGeometrica.push(valueArray);


    viewArray.innerHTML = "<p class='h4 text-primary'> " + arrayGeometrica + "</p>";
}

function calcularMediaGeometrica() {

    const viewMediaGeometrica = document.getElementById("viewMediaGeometrica");

    const multiplicacion = arrayGeometrica.reduce(
        function (a, b) {
            return a * b;
        }
    );
    const result = multiplicacion ** (1 / arrayGeometrica.length);

    viewMediaGeometrica.innerHTML = "<p class='h4 text-success' >Resultado: " + result + "</p>";

}