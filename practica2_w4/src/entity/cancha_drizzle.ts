import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { reserva } from "./reserva_drizzle";

const cancha = mysqlTable('cancha', {
    id: int("id").primaryKey().autoincrement(),
    descripcion: varchar("descripcion", {length : 255}).notNull(),
}); 

const cancharelacion = relations(cancha, ({ many }) => ({
    reservas: many(reserva)
}));

export { cancha, cancharelacion }