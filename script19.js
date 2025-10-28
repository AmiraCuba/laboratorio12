let arreglo = [-8, 2, 56, -132, 32, 0, 23, -54];
function filtrarArreglo (arr, callback) {
    let arregloFiltrado = [];
    for (const item of arr){
        if (callback(item)){
            arregloFiltrado.push(item);
        }
    }
    return arregloFiltrado;
}
const esPositivo = (numero) => numero > 0;
alert(`El arreglo [${arreglo}] filtrado es [${filtrarArreglo(arreglo, esPositivo)}]`);