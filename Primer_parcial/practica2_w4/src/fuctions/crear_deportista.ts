import { AppDataSource } from "../data-source";
import { deportista } from "../entity/deportista";

export async function crearDeportista(nombre: string, identificacion: string, equipo: string): Promise<deportista> {
    const Deportista = new deportista()
    Deportista.nombre = nombre
    Deportista.identificacion = identificacion
    Deportista.equipo = equipo
    return AppDataSource.manager.save(Deportista)
}