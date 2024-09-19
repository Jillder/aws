import { eq } from "drizzle-orm";
import { drizzleConnection } from "../drizzle";
import { deportista } from "../entity/deportista_drizzle";

async function actualizar_deportista_drizzle(id: number, datosActualizados: Partial<typeof deportista.$inferInsert>) {
    try {
        const resultado = await drizzleConnection.update(deportista)
            .set(datosActualizados)
            .where(eq(deportista.id, id));

        console.log(`Deportista con ID ${id} actualizado`);
        return resultado;
    } catch (error) {
        console.error('Error al actualizar el deportista:', error);
        throw error;
    }
}

export { actualizar_deportista_drizzle }