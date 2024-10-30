import { AppDataSource } from "../data-source";
import { cancha as cancha } from "../entity/cancha";

export async function crearCancha(descripcion: string): Promise<cancha> {
    const Cancha = new cancha()
    Cancha.descripcion = descripcion
    return AppDataSource.manager.save(Cancha)
}   