import "reflect-metadata"
import { DataSource } from "typeorm"
import { cancha } from "../entity_typeorm/cancha"
import { deportista } from "../entity_typeorm/deportista"
import { reserva } from "../entity_typeorm/reserva"
import { envs } from "../config/envs"

const connection = new DataSource({
    type: "mysql",
    host: envs.DB_HOST,
    port: parseInt(envs.DB_PORT),
    username: envs.DB_USER,
    password: envs.DB_PASSWORD,
    database: envs.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [cancha, deportista, reserva],
    migrations: [],
    subscribers: [],
})

connection.initialize()
  .then(() => {
    console.log('Conectado a la base de datos');
  })
  .catch((err) => {
    console.error('Error al conectar a la base de datos:', err);
  });

export { connection };