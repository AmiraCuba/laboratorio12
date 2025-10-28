function operacionesMatematicas () {
    let numero1 = parseFloat(prompt("Ingresa el número 1:")); 
    let numero2 = parseFloat(prompt("Ingresa el número 2:"));
    const sumar = () => numero1 + numero2;
    const restar = () => numero1 - numero2;
    const multiplicar = () => numero1 * numero2;
    const dividir = () => numero1 / numero2;
    return `Suma: ${sumar()} \nResta: ${restar()} \nMultiplicación: ${multiplicar()} \nDivisión: ${dividir()}`
}
alert(operacionesMatematicas());