import { CreateDeportistaDto } from '../../dtos';
import { DeportistaEntity } from '../../entities/deportista.entity';
import { DeportistaRepository } from '../../repositories/deportista.repository';

export interface CreateDeportistaUseCase {
  execute(dto: CreateDeportistaDto): Promise<DeportistaEntity>;
}

export class CreateDeportista implements CreateDeportistaUseCase {
  constructor(
    private readonly repository: DeportistaRepository,
  ) {}

  execute(dto: CreateDeportistaDto): Promise<DeportistaEntity> {
    return this.repository.create(dto);
  }
}
