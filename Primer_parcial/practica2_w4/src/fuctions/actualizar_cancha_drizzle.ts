import { eq } from "drizzle-orm";
import { drizzleConnection } from "../drizzle";
import { cancha } from "../entity/cancha_drizzle";

async function actualizarCancha(id:number, datosActualizados: Partial<typeof cancha.$inferInsert>) {
    try {
        const resultado = await drizzleConnection.update(cancha)
            .set(datosActualizados)
            .where(eq(cancha.id, id));
        console.log(` Cancha con ID ${id} actualizada `);
        return resultado;
    } catch (error) {
        console.error('Error al actualizar la cancha:', error);
        throw error;
    }
}

export { actualizarCancha }