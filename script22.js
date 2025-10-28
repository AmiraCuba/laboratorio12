function crearSecuencia(inicio, paso) {
    let actual = inicio;
    return function() {
        const valorDevolver = actual;
        actual += paso;
        return valorDevolver;
    };
}
const secuencia = crearSecuencia(2, 3);
console.log(secuencia());
console.log(secuencia());
console.log(secuencia());
console.log(secuencia());