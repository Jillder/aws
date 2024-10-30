import { UpdateDeportistaDto } from '../../dtos';
import { DeportistaEntity } from '../../entities/deportista.entity';
import { DeportistaRepository } from '../../repositories/deportista.repository';

export interface UpdateDeportistaUseCase {
  execute(dto: UpdateDeportistaDto): Promise<DeportistaEntity>;
}

export class UpdateDeportista implements UpdateDeportistaUseCase {

  constructor(
    private readonly repository: DeportistaRepository,
  ) {}

  execute(dto: UpdateDeportistaDto): Promise<DeportistaEntity> {
    return this.repository.updateById(dto);
  }
}
