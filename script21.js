let base = parseInt(prompt("Ingresa la base:"));
let exponente = parseInt(prompt("Ingresa el exponente:"));
let salida = base;
function potencia (base, exponente) {
    let resultado = 1;
    if (exponente == 0) {
        return resultado;
    }
    else {
        resultado = base * potencia(base, exponente - 1);
        return resultado;
    }
}
alert(`La potencia de ${base} a la ${exponente} es ${potencia(base, exponente)}`);