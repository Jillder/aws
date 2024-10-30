import { Entity, PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class usuario {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    clave: string

    @Column()
    estado: string
}