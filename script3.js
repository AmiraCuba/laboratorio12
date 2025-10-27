let numero1 = parseFloat(prompt("Ingresa el número 1:"));
let numero2 = parseFloat(prompt("Ingresa el número 2:"));
function esMultiplo(a, b){
    return a % b == 0;
}
alert(`¿${numero1} es múltiplo de ${numero2}?: ${esMultiplo(numero1, numero2)}`);