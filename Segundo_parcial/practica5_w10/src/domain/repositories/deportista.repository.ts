import { CreateDeportistaDto, UpdateDeportistaDto } from "../dtos";
import { DeportistaEntity } from "../entities/deportista.entity";

export abstract class DeportistaRepository {
  abstract create(createTodoDto: CreateDeportistaDto): Promise<DeportistaEntity>;
  abstract getAll(): Promise<DeportistaEntity[]>;
  abstract findById(id: number): Promise<DeportistaEntity>;
  abstract updateById( updateTodoDto: UpdateDeportistaDto): Promise<DeportistaEntity>;
  abstract deleteById(id: number): Promise<DeportistaEntity>;
}