let texto = prompt("Ingresa un texto:");
const mayusculas = (texto) => texto.toUpperCase();
const agregarSigno = (texto) => texto + "!";
const componerTransformaciones = (funcion1, funcion2) => (texto) => funcion2(funcion1(texto));
const transformar = componerTransformaciones(mayusculas, agregarSigno);
alert(`El texto "${texto}" transformado es ${transformar(texto)}`); 