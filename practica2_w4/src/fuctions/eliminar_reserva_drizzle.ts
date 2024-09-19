import { eq } from "drizzle-orm";
import { drizzleConnection } from "../drizzle";
import { reserva } from "../entity/reserva_drizzle";

async function eliminar_reserva_drizzle(id: number) {
    try {
        const reserva_eliminar = await drizzleConnection.delete(reserva).where(eq(reserva.id, id));
        console.log(` Reserva con ID ${id} eliminada `);
        return reserva_eliminar;
    } catch (error) {
        console.error(error);
        throw Error;
    }
}

export { eliminar_reserva_drizzle }