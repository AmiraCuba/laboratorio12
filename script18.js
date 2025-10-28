let numero1 = parseFloat(prompt("Ingresa el número 1:"));
let numero2 = parseFloat(prompt("Ingresa el número 2:"));
function ejecutarOperacion(funcion, x, y){
    return funcion(x, y)
}
const sumar = (x, y) => x + y;
const restar = (x, y) => x - y;
const multiplicar = (x, y) => x * y;
const dividir = (x, y) => x / y;
const potenciar = (x, y) => x ** y;
const modulo = (x, y) => x % y;
alert(`Suma: ${ejecutarOperacion(sumar, numero1, numero2)} \nResta: ${ejecutarOperacion(restar, numero1, numero2)} \nMultiplicación: ${ejecutarOperacion(multiplicar, numero1, numero2)} \nDivisión: ${ejecutarOperacion(dividir, numero1, numero2)} \nPotencia: ${ejecutarOperacion(potenciar, numero1, numero2)} \nMódulo: ${ejecutarOperacion(modulo, numero1, numero2)}`);
