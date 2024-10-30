import { CanchaEntity } from '../../entities/cancha.entity';
import { CanchaRepository } from '../../repositories/cancha.repository';

export interface GetCanchasUseCase {
  execute(): Promise<CanchaEntity[]>;
}

export class GetCanchas implements GetCanchasUseCase {
  constructor(
    private readonly repository: CanchaRepository,
  ) {}

  execute(): Promise<CanchaEntity[]> {
    return this.repository.getAll();
  }
}
