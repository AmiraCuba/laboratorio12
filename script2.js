let base = parseFloat(prompt("Ingresa el largo de la base:"));
let altura = parseFloat(prompt("Ingresa el largo de la altura:"));
function areaRectangulo(base, altura){
    return base*altura;
}
alert(`El área del rectángulo de base ${base} y altura ${altura} es ${areaRectangulo(base, altura)}`);