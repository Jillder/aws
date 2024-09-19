import { mysqlTable, int } from 'drizzle-orm/mysql-core';
import { relations } from 'drizzle-orm';
import { reserva } from './reserva_drizzle';
import { deportista } from './deportista_drizzle';

const reserva_deportistas_id_deportista = mysqlTable('reserva_deportistas_id_deportista', {
    reservaId: int('reservaId').notNull(),
    deportistaId: int('deportistaId').notNull(),
});

const reserva_reportistas_relacion = relations(reserva_deportistas_id_deportista, ({ one }) => ({
    reserva: one(reserva, {
        fields: [reserva_deportistas_id_deportista.reservaId],
        references: [reserva.id]
    }),
    deportista: one(deportista, {
        fields: [reserva_deportistas_id_deportista.deportistaId],
        references: [deportista.id]
    })
}));

export { reserva_deportistas_id_deportista, reserva_reportistas_relacion }