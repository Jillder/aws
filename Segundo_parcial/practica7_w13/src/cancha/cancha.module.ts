import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanchaService } from './cancha.service';
import { CanchaResolver } from './cancha.resolver';
import { Cancha } from './entities/cancha.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cancha])],
  providers: [CanchaService, CanchaResolver],
  exports: [CanchaService],
})
export class CanchaModule {}
