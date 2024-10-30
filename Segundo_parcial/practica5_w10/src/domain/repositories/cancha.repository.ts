import { CreateCanchaDto, UpdateCanchaDto } from "../dtos";
import { CanchaEntity } from "../entities/cancha.entity";

export abstract class CanchaRepository {
  abstract create(createTodoDto: CreateCanchaDto): Promise<CanchaEntity>;
  abstract getAll(): Promise<CanchaEntity[]>;
  abstract findById(id: number): Promise<CanchaEntity>;
  abstract updateById( updateTodoDto: UpdateCanchaDto): Promise<CanchaEntity>;
  abstract deleteById(id: number): Promise<CanchaEntity>;
}