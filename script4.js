let numero1 = parseFloat(prompt("Ingresa el número 1:"));
let numero2 = parseFloat(prompt("Ingresa el número 2:"));
let numero3 = parseFloat(prompt("Ingresa el número 3:"));
function  mayorDeTres(a, b, c){
    let mayor = a;
    if (mayor < b){
        mayor = b;
    }
    if (mayor < c){
        mayor = c;
    }
    return mayor;
}
alert(`El número mayor entre ${numero1}, ${numero2} y ${numero3} es ${mayorDeTres(numero1, numero2, numero3)}`);