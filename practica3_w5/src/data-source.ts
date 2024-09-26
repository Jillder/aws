import "reflect-metadata"
import { DataSource } from "typeorm"
import { cancha } from "./entity/cancha"
import { deportista } from "./entity/deportista"
import { reserva } from "./entity/reserva"  

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "practica_w4",
    synchronize: true,
    logging: false,
    entities: [cancha, deportista, reserva],
    migrations: [],
    subscribers: [],
})
