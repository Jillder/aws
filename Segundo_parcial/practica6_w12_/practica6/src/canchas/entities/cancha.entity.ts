import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Reserva } from "../../reservas/entities/reserva.entity"

@Entity('canchas')
export class Cancha {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @OneToMany(() => Reserva, reserva => reserva.cancha)
    reservas: Reserva[];
}
