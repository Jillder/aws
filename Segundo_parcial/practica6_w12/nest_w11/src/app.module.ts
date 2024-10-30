import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'practica6',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
