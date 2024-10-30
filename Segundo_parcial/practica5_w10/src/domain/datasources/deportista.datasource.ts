import { DeportistaEntity } from '../entities/deportista.entity';
import { CreateDeportistaDto, UpdateDeportistaDto } from '../dtos';

export abstract class DeportistaDatasource {
  
  abstract create(createDeportistaDto: CreateDeportistaDto): Promise<DeportistaEntity>;
  abstract getAll(): Promise<DeportistaEntity[]>;
  abstract findById(id: number): Promise<DeportistaEntity>;
  abstract updateById(updateDeportistaDto: UpdateDeportistaDto): Promise<DeportistaEntity>;
  abstract deleteById(id: number): Promise<DeportistaEntity>;

}
