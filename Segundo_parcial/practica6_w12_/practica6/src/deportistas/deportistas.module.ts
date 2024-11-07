import { Module } from '@nestjs/common';
import { DeportistasService } from './deportistas.service';
import { DeportistasController } from './deportistas.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deportista } from './entities/deportista.entity';

@Module({
  controllers: [DeportistasController],
  providers: [DeportistasService],
  imports: [
    TypeOrmModule.forFeature([Deportista]),
  ],
  exports: [TypeOrmModule]
})
export class DeportistasModule {}
