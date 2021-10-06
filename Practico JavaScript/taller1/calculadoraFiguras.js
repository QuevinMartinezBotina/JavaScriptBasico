/* 
Hacer una calculadora de figuras geométricas

1.Definir formulas
2.Implementar la fórmukas en JS
3.Crear funciones
4.incluir en JS con HTML

*/

/* Código del cuadrado */
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado ** 2;
}

console.groupEnd();

/* Código del triangulo */
console.group("Triangulo");


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

/* Código del Circulo */
console.group("Circulo");

const pi = Math.PI;

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio) {
    return (radio ** 2) * pi;
}

console.groupEnd();

// Aquí interactuamos con el HTML

/* Cuadrado */
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("Perimetro " + perimetro + " cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("Área " + area + " cm");
}


/* Triangulo */
function calcularPerimetroTriangulo() {
    const valueUno = document.getElementById("lado1");
    const valueDos = document.getElementById("lado2");
    const vase = document.getElementById("base");
    const ladoUno = parseInt(valueUno.value);
    const ladoDos = parseInt(valueDos.value);
    const base = parseInt(vase.value);

    const perimetroT = perimetroTriangulo(ladoUno, ladoDos, base);
    alert("Perimetro " + perimetroT + " cm");
}

function calcularAreaTriangulo() {
    const inputBase = document.getElementById("base2");
    const inputAltura = document.getElementById("altura");
    const base = parseInt(inputBase.value);
    const altura = parseInt(inputAltura.value);

    const area = areaTriangulo(base, altura);
    alert("Area " + area + " cm2");
}

/* Circulo */
function calcularPerimetroCirculo() {
    const inputArea = document.getElementById("InputCirculo");
    const area = parseInt(inputArea.value);

    const perimetro = perimetroCirculo(area);
    alert("Perimetro " + perimetro + " cm");
}

function calcularAreaCirculo() {
    const inputArea = document.getElementById("InputCirculo");
    const area = parseInt(inputArea.value);

    const perimetro = areaCirculo(area);
    alert("Perimetro " + perimetro + " cm");
}