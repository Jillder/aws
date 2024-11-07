import { Cancha } from "src/canchas/entities/cancha.entity";
import { Deportista } from "src/deportistas/entities/deportista.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("reservas")
export class Reserva {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fecha: string;

    @Column()
    horaDesde: string;

    @Column()
    horaHasta: string;

    @ManyToOne(() => Cancha, (cancha) => cancha.reservas)
    @JoinColumn({ name: 'canchaId' })
    cancha: Cancha;

    @ManyToMany(() => Deportista, (deportista) => deportista.reservas)
    @JoinTable({
        name: 'reserva_deportista',
        joinColumn: {
            name: 'reservaId',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'deportistaId',
            referencedColumnName: 'id',
        },
    })
    deportistas: Deportista[];
}
