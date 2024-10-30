import { UpdateCanchaDto } from '../../dtos';
import { CanchaEntity } from '../../entities/cancha.entity';
import { CanchaRepository } from '../../repositories/cancha.repository';

export interface UpdateCanchaUseCase {
  execute(dto: UpdateCanchaDto): Promise<CanchaEntity>;
}

export class UpdateCancha implements UpdateCanchaUseCase {
  constructor(
    private readonly repository: CanchaRepository,
  ) {}

  execute(dto: UpdateCanchaDto): Promise<CanchaEntity> {
    return this.repository.updateById(dto);
  }
}
