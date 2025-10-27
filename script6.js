let textoMinusculas = prompt("Ingresa el texto a convertir:");
const convertirAMayusculas = function(string){
    return string.toUpperCase();
}
alert(`La palabra ${textoMinusculas} en mayúsculas es ${convertirAMayusculas(textoMinusculas)}`);