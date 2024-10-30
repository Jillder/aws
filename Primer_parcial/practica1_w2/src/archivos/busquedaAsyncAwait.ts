import { canchas, deportistas, separaciones } from "./data";

async function buscarAsyncAwait(id: number, seleccion: number) {
    let resultado: any;

    switch (seleccion) {
        case 1:
            resultado = canchas.find(cancha => cancha.id === id);
            break;
        case 2:
            resultado = deportistas.find(deportista => deportista.id === id);
            break;
        case 3:
            resultado = separaciones.find(separacion => separacion.id === id);
            break;
        default:
            throw new Error('Error en la búsqueda');
    }

    if (!resultado) {
        throw new Error('No se encontró el elemento');
    }

    return resultado;
}

export { buscarAsyncAwait };
