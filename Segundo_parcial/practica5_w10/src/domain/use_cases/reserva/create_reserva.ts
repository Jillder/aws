import { CreateReservaDto } from '../../dtos';
import { ReservaEntity } from '../../entities/reserva.entity';
import { ReservaRepository } from '../../repositories/reserva.repository';

export interface CreateReservaUseCase {
  execute(dto: CreateReservaDto): Promise<ReservaEntity>;
}

export class CreateReserva implements CreateReservaUseCase {
  
  constructor(
    private readonly repository: ReservaRepository,
  ) {}
  
  execute(dto: CreateReservaDto): Promise<ReservaEntity> {
    return this.repository.create(dto);
  }
}
