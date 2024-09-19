import { canchas, deportistas, separaciones } from "./data";

function buscar (id:number, seleccion:number,
    callback: (error:Error|null, resultado: any) => void) {
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
                callback(new Error('Error en la búsqueda'), '');
    }
    if (resultado ) {
        callback(null, resultado); 
    } else {
        callback(new Error('No se encontró el elemento'), '');
    }
    }
export { buscar };