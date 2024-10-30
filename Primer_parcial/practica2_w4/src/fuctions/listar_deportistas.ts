import { AppDataSource } from "../data-source";
import { deportista } from "../entity/deportista";

export async function listarDeportistas(): Promise<deportista[]> {
    const deportistaRepository = AppDataSource.getRepository(deportista);
    return deportistaRepository.find();
}