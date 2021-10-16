function CalcularDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = descuento / 100;
  const precioConDescuento = precio * porcentajePrecioConDescuento;
  return precioConDescuento;
}

function balanceMensual() {
  /* optener campos de datos */
  const inputSueldodoMes = document.getElementById("inputSueldodoMes");
  const selectTransporte = document.getElementById("selectTransporte");
  const selectComida = document.getElementById("selectComida");
  const selectServicios = document.getElementById("selectServicios");

  /* Optener campos vista */
  const viewTransporte = document.getElementById("viewTransporte");
  const viewComida = document.getElementById("viewComida");
  const viewServicios = document.getElementById("viewServicios");
  const viewEntretenimiento = document.getElementById("viewEntretenimiento");

  /* Optener datos datos */
  const valueSueldoMes = parseInt(inputSueldodoMes.value);
  const valueTransporte = parseInt(selectTransporte.value);
  const valueComida = parseInt(selectComida.value);
  const valueServicios = parseInt(selectServicios.value);

  /* Operaciones */
  const resultTransporte = CalcularDescuento(valueSueldoMes, valueTransporte);
  const resultComida = CalcularDescuento((valueSueldoMes - resultTransporte), valueComida);
  const resultServicios = CalcularDescuento((valueSueldoMes - resultComida - resultTransporte), valueServicios);
  const resultEntrenimiento = valueSueldoMes - (resultTransporte + resultComida + resultServicios);

  /* Return data */
  viewTransporte.innerHTML = "<p class='h5 text-success'>" + Intl.NumberFormat().format(resultTransporte) + "</p>";
  viewComida.innerHTML = "<p class='h5 text-success'>" + Intl.NumberFormat().format(resultComida) + "</p>";
  viewServicios.innerHTML = "<p class='h5 text-success'>" + Intl.NumberFormat().format(resultServicios) + "</p>";
  viewEntretenimiento.innerHTML = "<p class='h5 text-primary'>" + Intl.NumberFormat().format(resultEntrenimiento) + "</p>";
}