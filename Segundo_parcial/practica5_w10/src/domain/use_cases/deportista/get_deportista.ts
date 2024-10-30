import { DeportistaEntity } from "../../entities/deportista.entity";
import { DeportistaRepository } from "../../repositories/deportista.repository";

export interface GetDeportistaUseCase {
  execute(id: number): Promise<DeportistaEntity>;
}

export class GetDeportista implements GetDeportistaUseCase {
  
  constructor(
    private readonly repository: DeportistaRepository,
  ) {}

  execute(id: number): Promise<DeportistaEntity> {
    return this.repository.findById(id);
  }
}
