let valorInicial = parseInt(prompt("Ingresa el valor inicial:"));
let numero1 = parseInt(prompt("Ingresa el incremento 1:"));
let numero2 = parseInt(prompt("Ingresa el incremento 2:"));
let numero3 = parseInt(prompt("Ingresa el incremento 3:"));
function acumulador (valorInicial) {
    const sumar = (numero) => {
        valorInicial += numero;
        return valorInicial;
    }
    return sumar;
}
let acumulador1 = acumulador(valorInicial);
alert(`Primer aumento: ${acumulador1(numero1)} \nSegundo aumento: ${acumulador1(numero2)}, \nTercer aumento:${acumulador1(numero3)}`);