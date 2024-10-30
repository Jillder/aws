import { DeportistaEntity } from "../../entities/deportista.entity";
import { DeportistaRepository } from "../../repositories/deportista.repository";

export interface DeleteDeportistaUseCase {
  execute(id: number): Promise<DeportistaEntity>;
}

export class DeleteDeportista implements DeleteDeportistaUseCase {
  constructor(
    private readonly repository: DeportistaRepository,
  ) {}

  async execute(id: number): Promise<DeportistaEntity> {
    const deportista = await this.repository.findById(id);
    if (!deportista) {
      throw new Error('Deportista no encontrado');
    }
    
    return this.repository.deleteById(id);
  }
}
