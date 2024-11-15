import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity()
export class Deportista {
  @Field(() => Int, { description: 'ID del deportista' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Nombre del deportista' })
  @Column()
  nombre: string;

  @Field(() => String, { description: 'Identificación del deportista' })
  @Column({ unique: true })
  identificacion: string;

  @Field(() => String, { description: 'Equipo del deportista' })
  @Column()
  equipo: string;
}
