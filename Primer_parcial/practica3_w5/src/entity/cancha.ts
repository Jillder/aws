import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { reserva } from "./reserva"

@Entity()
export class cancha {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descripcion: string

    @OneToMany(() => reserva, reserva => reserva.cancha)
    reservas: reserva[];

}
