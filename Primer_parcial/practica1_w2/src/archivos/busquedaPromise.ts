import { canchas, deportistas, separaciones } from "./data";

function buscarPromises(id: number, seleccion: number): Promise<any> {
    return new Promise((resolve, reject) => {
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
                return reject(new Error('Error en la búsqueda, selección inválida'));
        }

        if (resultado) {
            resolve(resultado); 
        } else {
            reject(new Error('No se encontró el elemento'));
        }
    });
}

export { buscarPromises };
