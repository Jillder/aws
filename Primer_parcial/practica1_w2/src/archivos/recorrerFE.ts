function recorrerFE<T>(elementos: T[], callback: (elemento: T) => void) {
    elementos.forEach(elemento => {
        callback(elemento);
    });
}

export {recorrerFE};