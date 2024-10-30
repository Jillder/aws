import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { relations } from "drizzle-orm";
import { cancha } from "./cancha_drizzle";
import { reserva_deportistas_id_deportista } from "./reserva_deportistas_id_deportista";

const reserva = mysqlTable('reserva', {
    id: int("id").primaryKey().autoincrement(),
    fecha: varchar("fecha", {length : 255}).notNull(),
    hora_desde: varchar("hora_desde", {length : 255}).notNull(),
    hora_hasta: varchar("hora_hasta", {length : 255}).notNull(),
    canchaId: int("canchaId").notNull(),
});

const reservarelacion = relations(reserva, ({ one,many }) => ({
    cancha: one(cancha, {
        fields: [reserva.canchaId],
        references: [cancha.id],
    }),
    deportistas: many(reserva_deportistas_id_deportista),
}));


export { reserva, reservarelacion }
