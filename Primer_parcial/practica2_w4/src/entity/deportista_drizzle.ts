import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { reserva_deportistas_id_deportista } from "./reserva_deportistas_id_deportista";

const deportista = mysqlTable('deportista', {
    id: int("id").primaryKey().autoincrement(),
    nombre: varchar("nombre", {length : 255}).notNull(),
    identificacion: varchar("identificacion", {length : 255}).notNull(),
    equipo: varchar("equipo", {length : 255}).notNull(),
}); 

const deportistarelacion = relations(deportista, ({ many }) => ({
    reservas: many(reserva_deportistas_id_deportista)
}));

export { deportista, deportistarelacion }