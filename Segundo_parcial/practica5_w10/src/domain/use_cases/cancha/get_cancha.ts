import { CanchaEntity } from '../../entities/cancha.entity';
import { CanchaRepository } from '../../repositories/cancha.repository';

export interface GetCanchaUseCase {
  execute(id: number): Promise<CanchaEntity>;
}

export class GetCancha implements GetCanchaUseCase {
  constructor(
    private readonly repository: CanchaRepository,
  ) {}

  execute(id: number): Promise<CanchaEntity> {
    return this.repository.findById(id);
  }
}
