let precio = parseFloat(prompt("Ingresa el precio:"));
let descuentoPorcentaje = parseFloat(prompt("Ingresa el descuento a aplicar (%):"));
const calcularDescuento = function(precio, porcentaje){
    return precio * porcentaje/100;
}
alert(`El descuento es de S/.${calcularDescuento(precio, descuentoPorcentaje)}, teniendo que pagar al final un total de ${precio - calcularDescuento(precio, descuentoPorcentaje)}`);