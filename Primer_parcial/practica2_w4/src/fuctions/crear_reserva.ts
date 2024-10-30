import { AppDataSource } from "../data-source";
import { In } from "typeorm";
import { reserva } from "../entity/reserva";
import { cancha } from "../entity/cancha";
import { deportista } from "../entity/deportista";

export async function crearReserva(fecha: string, hora_desde: string, hora_hasta: string, canchaId:number, deportistasIds: number[]): Promise<reserva> {

    const reservaRepository = AppDataSource.getRepository(reserva);
    const canchaRepository = AppDataSource.getRepository(cancha);
    const deportistaRepository = AppDataSource.getRepository(deportista);

    const canchaEntity = await canchaRepository.findOne({ where: { id: canchaId } });
    if (!canchaEntity) {
        throw new Error("Cancha no encontrada")
    }

    const deportistas = await deportistaRepository.findBy({ id: In(deportistasIds) });
    if (deportistas.length === 0) throw new Error("No se encontraron deportistas");

    const nuevaReserva = new reserva();
    nuevaReserva.fecha = fecha;
    nuevaReserva.hora_desde = hora_desde;
    nuevaReserva.hora_hasta = hora_hasta;
    nuevaReserva.canchaId = canchaEntity;
    nuevaReserva.deportistasId = deportistas;

    return reservaRepository.save(nuevaReserva);
}