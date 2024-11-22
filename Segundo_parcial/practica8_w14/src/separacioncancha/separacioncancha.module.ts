import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeparacionCanchaService } from './separacioncancha.service';
import { SeparacionCancha } from './entities/separacioncancha.entity';
import { Cancha } from '../cancha/entities/cancha.entity';
import { Deportista } from '../deportista/entities/deportista.entity';
import { SeparacionCanchaGateway } from './separacioncancha.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([SeparacionCancha, Cancha, Deportista]),
  ],
  providers: [SeparacionCanchaService, SeparacionCanchaGateway],
  exports: [SeparacionCanchaService],
})
export class SeparacionCanchaModule {}
