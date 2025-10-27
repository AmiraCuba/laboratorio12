let numero = parseInt(prompt("Ingresa un número:"));
function esPar(numero){
    if (numero % 2 == 0)
        return true;
    else
        return false;
}
alert(`La función "esPar" devuelve el valor ${esPar(numero)} para el número ${numero}`);