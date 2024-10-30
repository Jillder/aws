import { CreateCanchaDto } from '../../dtos';
import { CanchaEntity } from '../../entities/cancha.entity';
import { CanchaRepository } from '../../repositories/cancha.repository';

export interface CreateCanchaUseCase {
  execute(dto: CreateCanchaDto): Promise<CanchaEntity>;
}

export class CreateCancha implements CreateCanchaUseCase {
  constructor(
    private readonly repository: CanchaRepository,
  ) {}

  execute(dto: CreateCanchaDto): Promise<CanchaEntity> {
    return this.repository.create(dto);
  }
}
