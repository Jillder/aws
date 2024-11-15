import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeportistaService } from './deportista.service';
import { DeportistaResolver } from './deportista.resolver';
import { Deportista } from './entities/deportista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deportista])],
  providers: [DeportistaService, DeportistaResolver],
  exports: [DeportistaService],
})
export class DeportistaModule {}
