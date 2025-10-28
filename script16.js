let aumentarNumeros = true;
let numeros = [];
while(aumentarNumeros){
    let numero = parseFloat(prompt("Ingresa un número, ingresa 0 si quieres parar:"))
    if (!numero == 0)
        numeros.push(numero);
    else 
        aumentarNumeros = false;
}
function media(...numeros){
    let suma = 0;
    for (const numero of numeros){
        suma += numero;
    }
    return (suma/numeros.length).toFixed(2);
}
alert(`El promedio es ${media(...numeros)}`);