let nota1 = parseFloat(prompt("Ingresa la nota 1:"));
let nota2 = parseFloat(prompt("Ingresa la nota 2:"));
let nota3 = parseFloat(prompt("Ingresa la nota 3:"));
const promedio = function(a, b, c){
    return ((a+b+c)/3).toFixed(2);
}
alert(`El promedio de las notas ${nota1}, ${nota2} y ${nota3} es ${promedio(nota1, nota2, nota3)}`);