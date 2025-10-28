function descargarArchivo(url, callback) {
    alert("Descargando...");
    setTimeout(() => {
        callback(url);
    }, 2000);
}
function mostrarMensajeCompleto(url) {
    alert(`Descarga completa de ${url}`);
}
let archivo = "documento_importante.pdf";
descargarArchivo(archivo, mostrarMensajeCompleto);