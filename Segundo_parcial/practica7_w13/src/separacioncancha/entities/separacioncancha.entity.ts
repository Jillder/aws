import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Cancha } from 'src/cancha/entities/cancha.entity';
import { Deportista } from 'src/deportista/entities/deportista.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@ObjectType()
@Entity('separaciones_cancha')
export class SeparacionCancha {
  @Field(() => Int, { description: 'ID de la separación' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int, { description: 'ID de la cancha asociada' })
  @Column()
  idCancha: number;

  @Field(() => Int, { description: 'ID del deportista asociado' })
  @Column()
  idDeportista: number;

  @Field(() => String, { description: 'Fecha de la separación' })
  @Column()
  fechaSeparacion: string;

  @Field(() => String, { description: 'Hora de inicio de la separación' })
  @Column()
  horaDesde: string;

  @Field(() => String, { description: 'Hora de finalización de la separación' })
  @Column()
  horaHasta: string;

  @Field(() => Cancha, { description: 'Cancha asociada a la separación' })
  @ManyToOne(() => Cancha, (cancha) => cancha.id)
  @JoinColumn({ name: 'idCancha' })
  cancha: Cancha;

  @Field(() => Deportista, { description: 'Deportista asociado a la separación' })
  @ManyToOne(() => Deportista, (deportista) => deportista.id)
  @JoinColumn({ name: 'idDeportista' })
  deportista: Deportista;
}
