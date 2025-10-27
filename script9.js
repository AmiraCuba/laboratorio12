let numero = parseFloat(prompt("Ingresa un número:"));
const esPositivo = (numero) => numero > 0;
alert(`¿El número ${numero} es mayor a cero?: ${esPositivo(numero)}`);