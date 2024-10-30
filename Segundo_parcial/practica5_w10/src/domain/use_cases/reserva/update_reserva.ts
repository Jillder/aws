import { UpdateReservaDto } from '../../dtos';
import { ReservaEntity } from '../../entities/reserva.entity';
import { ReservaRepository } from '../../repositories/reserva.repository';

export interface UpdateReservaUseCase {
  execute(dto: UpdateReservaDto): Promise<ReservaEntity>;
}

export class UpdateReserva implements UpdateReservaUseCase {
  
  constructor(
    private readonly repository: ReservaRepository,
  ) {}
  
  execute(dto: UpdateReservaDto): Promise<ReservaEntity> {
    return this.repository.updateById(dto);
  }
}
