import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanchaService } from './cancha.service';
import { Cancha } from './entities/cancha.entity';
import { CanchaGateway } from './cancha.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Cancha])],
  providers: [CanchaService, CanchaGateway],
  exports: [CanchaService],
})
export class CanchaModule {}
