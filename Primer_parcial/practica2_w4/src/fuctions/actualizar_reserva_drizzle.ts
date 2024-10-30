import { eq } from 'drizzle-orm';
import { drizzleConnection } from '../drizzle';
import { reserva } from '../entity/reserva_drizzle';

async function actualizarReserva(id: number, datosActualizados: Partial<typeof reserva.$inferInsert>) {
  try {
    const resultado = await drizzleConnection.update(reserva)
      .set(datosActualizados)
      .where(eq(reserva.id, id));
    
    console.log(`Reserva con ID ${id} actualizada`);
    return resultado;
  } catch (error) {
    console.error('Error al actualizar la reserva:', error);
    throw error;
  }
}

export { actualizarReserva }