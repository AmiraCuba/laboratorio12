function crearContador () {
    let contador = 0;
    const incrementar = () => {
        contador++;
        return contador;
    }
    const resetear = () => {
        contador = 0;
        return contador;
    }
    return {incrementar, resetear};
}
let contador = crearContador();
alert(`${contador.incrementar()}, ${contador.incrementar()}, ${contador.incrementar()}, ${contador.resetear()}`);