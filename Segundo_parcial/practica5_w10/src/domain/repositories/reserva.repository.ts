import { ReservaEntity } from "../entities/reserva.entity";
import { CreateReservaDto, UpdateReservaDto } from "../dtos"; 

export abstract class ReservaRepository {

  abstract create(createReservaDto: CreateReservaDto): Promise<ReservaEntity>;
  abstract getAll(): Promise<ReservaEntity[]>;
  abstract findById(id: number): Promise<ReservaEntity>;
  abstract updateById(updateReservaDto: UpdateReservaDto): Promise<ReservaEntity>;
  abstract deleteById(id: number): Promise<ReservaEntity>;
  abstract findByDeportistaId(deportistaId: number): Promise<ReservaEntity[]>;
  abstract findByCanchaId(canchaId: number): Promise<ReservaEntity[]>;
}
