let nombre = prompt("Ingresa tu nombre:");
function saludo(nombre = "Amigo") {
    return `¡Hola, ${nombre}! Bienvenido.`;
}
alert(saludo(nombre));
