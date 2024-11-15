import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity,PrimaryGeneratedColumn,Column } from 'typeorm';

@ObjectType()
@Entity()
export class Cancha {
  @Field(() => Int, { description: 'ID de la cancha' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { description: 'Descripción de la cancha' })
  @Column({ type: 'varchar', length: 255 }) 
  descripcion: string;

}
