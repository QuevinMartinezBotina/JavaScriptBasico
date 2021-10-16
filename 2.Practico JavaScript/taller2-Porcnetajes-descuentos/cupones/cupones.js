/* 
1-Definir la formulas
2-Implementar la fórmula de JavaScript
3-Crear funciones 
4-Integrar JS con HTML
*/



function CalcularPreciosConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function CalcularDescuento() {
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const ResultPrice = document.getElementById("ResultPrice");
    const originalPrice = document.getElementById("originalPrice");
    const selectCupon = document.getElementById("selectCupon");
    const discountPorcentange = document.getElementById("discountPorcentange");


    const priceValue = parseInt(inputPrice.value);
    const discountValue = parseInt(inputDiscount.value);
    const cuponValue = parseInt(selectCupon.value);

    const cuponTotal = cuponValue + discountValue;

    const PrecioConDescuento = CalcularPreciosConDescuento(priceValue, cuponTotal);
    ResultPrice.innerHTML = "<p class='h1 text-primary' >" + Intl.NumberFormat().format(PrecioConDescuento) + "</p>";
    originalPrice.innerHTML = "<p class='h2 text-white' >" + Intl.NumberFormat().format(priceValue) + "</p>";
    discountPorcentange.innerHTML = "<p class='h2 text-white' >" + Intl.NumberFormat().format(cuponTotal) + "%</p>";
}

function Limpiar() {
    const ResultPrice = document.getElementById("ResultPrice");
    ResultPrice.innerText = "";

}