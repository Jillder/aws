import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable, JoinColumn } from "typeorm"
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

    @ManyToOne(() => cancha, (cancha) => cancha.reservas)
    @JoinColumn({ name: 'canchaIdId' })
    cancha: cancha;

    @ManyToMany(() => deportista, (deportista) => deportista.reservas)
    @JoinTable({
        name: 'reserva_deportistas_id_deportista',
        joinColumn: {
            name: 'reservaId',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'deportistaId',
            referencedColumnName: 'id',
        },
    })
    deportistas: deportista[];
}