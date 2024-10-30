import { CanchaEntity } from '../../entities/cancha.entity';
import { CanchaRepository } from '../../repositories/cancha.repository';

export interface DeleteCanchaUseCase {
  execute(id: number): Promise<CanchaEntity>;
}

export class DeleteCancha implements DeleteCanchaUseCase {
  constructor(
    private readonly repository: CanchaRepository,
  ) {}

  execute(id: number): Promise<CanchaEntity> {
    return this.repository.deleteById(id);
  }
}
