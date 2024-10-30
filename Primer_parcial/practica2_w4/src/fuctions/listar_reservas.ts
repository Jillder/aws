import { AppDataSource } from "../data-source";
import { reserva } from "../entity/reserva";

export async function listarReservas(): Promise<reserva[]> {
    const reservaRepository = AppDataSource.getRepository(reserva);
    return reservaRepository.find();
}