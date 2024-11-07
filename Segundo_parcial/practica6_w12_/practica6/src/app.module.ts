import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanchasModule } from './canchas/canchas.module';
import { DeportistasModule } from './deportistas/deportistas.module';
import { ReservasModule } from './reservas/reservas.module';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'asw_segundo_parcial',
      synchronize: true,
      autoLoadEntities: true,
    }),
    CanchasModule,
    DeportistasModule,
    ReservasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
