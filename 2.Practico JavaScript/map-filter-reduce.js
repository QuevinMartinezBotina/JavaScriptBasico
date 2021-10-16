/* Map */

const nums = [1, 24, 35, 46, 57, 1, 1, 2, 2, 3, 3];

const dobles = nums.map(function (numero) {
  return numero * 2;
});

/* Ejemplo 2 de map */
const productos = [
  {
    id: "a1",
    nombre: "Leche",
    precio: 100,
  },
  {
    id: "ab2",
    nombre: "Carne",
    precio: 1000,
  },
  {
    id: "c3",
    nombre: "Huevos",
    precio: 3000,
  },
];
//hacer descuento
const productosDescuento = productos.map(function (producto) {
  if (producto.precio < 1000) return producto;
  return {
    ...producto,
    precio: producto.precio * 0.9,
  };
});
//retornar solo id con flecha
const idProductosFlecha = productos.map(({ id }) => id);

/* Filter */

//Sacar productos baratos y caros
const esBarato = (producto) => producto.precio <= 1000;
const esCaro = (producto) => !esBarato(producto);

const productosBaratos = productos.filter(esBarato);
const productosCaros = productos.filter(esCaro);

//sacar números repetidos
const numsUnicos = nums.filter((numero, posicion, nums) => {
  return posicion === nums.indexOf(numero);
});

const numsRepetidos = nums.filter((numero, posicion, nums) => {
  return posicion !== nums.indexOf(numero);
});

/* Reduce */

//suma de todos lo números del array
const acumular = (acumulador, numero) => acumulador + numero;
const sumaNums = nums.reduce(acumular, 0);
