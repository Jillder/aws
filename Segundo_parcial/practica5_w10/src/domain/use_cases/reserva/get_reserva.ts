import { ReservaEntity } from '../../entities/reserva.entity';
import { ReservaRepository } from '../../repositories/reserva.repository';

export interface GetReservaUseCase {
  execute(id: number): Promise<ReservaEntity>;
}

export class GetReserva implements GetReservaUseCase {
  
  constructor(
    private readonly repository: ReservaRepository,
  ) {}
  
  execute(id: number): Promise<ReservaEntity> {
    return this.repository.findById(id);
  }
}
