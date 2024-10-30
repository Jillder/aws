import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import { cancha } from "./cancha"
import { deportista } from "./deportista"

@Entity()
export class reserva {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    fecha: string

    @Column()
    hora_desde: string

    @Column()
    hora_hasta: string
   
    @ManyToOne(() => cancha, cancha => cancha.reservas)
    canchaId: cancha

    @ManyToMany(() => deportista, deportista => deportista.reservas)
    @JoinTable()
    deportistasId: deportista[]
}