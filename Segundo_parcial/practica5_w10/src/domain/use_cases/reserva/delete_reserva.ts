import { ReservaEntity } from '../../entities/reserva.entity';
import { ReservaRepository } from '../../repositories/reserva.repository';

export interface DeleteReservaUseCase {
  execute(id: number): Promise<ReservaEntity>;
}

export class DeleteReserva implements DeleteReservaUseCase {
  
  constructor(
    private readonly repository: ReservaRepository,
  ) {}
  
  execute(id: number): Promise<ReservaEntity> {
    return this.repository.deleteById(id);
  }
}
