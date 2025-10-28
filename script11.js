let texto = prompt("Ingresa un texto:");
function procesarTexto (texto) {
    function limpiarEspacios (texto) {
        let arregloPalabra = texto.split(" ");
        let sinEspacios = "";
        for (const palabra of arregloPalabra){
            sinEspacios += palabra;
        }
        return sinEspacios;
    }
    function contarPalabras (texto) {
        let arregloPalabra = texto.split(" ");
        let cantidadPalabras = 0;
        for (const palabra of arregloPalabra){
            cantidadPalabras++;
        }
        return cantidadPalabras;
    }
    return `El texto sin espacios es ${limpiarEspacios(texto)} y la cantidad de palabras es ${contarPalabras(texto)}`
}
alert(procesarTexto(texto));