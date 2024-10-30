import { DeportistaEntity } from '../../entities/deportista.entity';
import { DeportistaRepository } from '../../repositories/deportista.repository';


export interface GetDeportistasUseCase {
  execute(): Promise<DeportistaEntity[]>
}

export class GetDeportistas implements GetDeportistasUseCase {

  constructor(
    private readonly repository: DeportistaRepository,
  ) {}

  execute(): Promise<DeportistaEntity[]> {
    return this.repository.getAll();
  }
}
