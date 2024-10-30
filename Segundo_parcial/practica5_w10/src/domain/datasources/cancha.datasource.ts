import { CanchaEntity } from '../entities/cancha.entity';
import { CreateCanchaDto, UpdateCanchaDto } from '../dtos';

export abstract class CanchaDatasource {
  
  abstract create(createCanchaDto: CreateCanchaDto): Promise<CanchaEntity>;
  abstract getAll(): Promise<CanchaEntity[]>;
  abstract findById(id: number): Promise<CanchaEntity>;
  abstract updateById(updateCanchaDto: UpdateCanchaDto): Promise<CanchaEntity>;
  abstract deleteById(id: number): Promise<CanchaEntity>;

}
