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
    const priceValue = parseInt(inputPrice.value);
    const discountValue = parseInt(inputDiscount.value);

    const PrecioConDescuento = CalcularPreciosConDescuento(priceValue, discountValue);
    ResultPrice.innerHTML = "<p class='h4 text-success' >" + Intl.NumberFormat().format(PrecioConDescuento) + "</p>";
}

function Limpiar() {
    const ResultPrice = document.getElementById("ResultPrice");
    ResultPrice.innerText = "";

}