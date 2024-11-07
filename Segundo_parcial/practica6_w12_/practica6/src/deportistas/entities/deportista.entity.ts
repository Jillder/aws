import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
import { Reserva } from 'src/reservas/entities/reserva.entity';

@Entity('deportistas')
export class Deportista {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    identificacion: string;

    @Column()
    equipo: string;

    @ManyToMany(() => Reserva, reserva => reserva.deportistas)
    reservas: Reserva[];
}
