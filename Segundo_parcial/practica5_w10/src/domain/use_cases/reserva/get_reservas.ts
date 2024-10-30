import { ReservaEntity } from '../../entities/reserva.entity';
import { ReservaRepository } from '../../repositories/reserva.repository';

export interface GetReservasUseCase {
  execute(): Promise<ReservaEntity[]>;
}

export class GetReservas implements GetReservasUseCase {
  
  constructor(
    private readonly repository: ReservaRepository,
  ) {}
  
  execute(): Promise<ReservaEntity[]> {
    return this.repository.getAll();
  }
}
