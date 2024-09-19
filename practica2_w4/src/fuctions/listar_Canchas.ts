import { AppDataSource } from "../data-source";
import { cancha } from "../entity/cancha";

export async function listarCanchas(): Promise<cancha[]> {
    const canchaRepository = AppDataSource.getRepository(cancha);
    return canchaRepository.find();
}
