import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeportistaService } from './deportista.service';
import { Deportista } from './entities/deportista.entity';
import { DeportistaGateway } from './deportista.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Deportista])],
  providers: [DeportistaService, DeportistaGateway],
  exports: [DeportistaService],
})
export class DeportistaModule {}
