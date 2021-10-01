var articulos = [{
        nombre: "articulo1",
        costo: 1000
    },
    {
        nombre: "articulo2",
        costo: 2000
    },
    {
        nombre: "articulo3",
        costo: 3000
    },
    {
        nombre: "articulo4",
        costo: 4000
    },
    {
        nombre: "articulo5",
        costo: 5000
    },
    {
        nombre: "articulo6",
        costo: 6000
    },
]

/* Para devolver un resultado en base a un condición */
var artiuclosFilter = articulos.filter(
    function (articulo) {
        return articulo.costo <= 500
    }
);

/* Para devolver solo no nombre*/
var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre;
})

/* Encontrar algo */
var encontrarArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "articulo5";
});

/* Recorre un array */
articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});

/* validación de true o falso (boolean) */
var baratosArticulo = articulos.some(function (articulo) {
    return articulo.costo <= 3000;
});

switch (key) {
    case value:

        break;

    default:
        break;
}
// sas