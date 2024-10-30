import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { reserva } from "./reserva"

@Entity()
export class deportista {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    identificacion: string

    @Column()
    equipo: string

    @OneToMany(() => reserva, reserva => reserva.deportistasId)
    reservas: reserva[]
}