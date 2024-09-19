import { eq } from "drizzle-orm";
import { drizzleConnection } from "../drizzle";
import { cancha } from "../entity/cancha_drizzle";

async function eliminar_cancha_drizzle(id: number) {
    try {
        const cancha_eliminar = await drizzleConnection.delete(cancha).where(eq(cancha.id, id));
        console.log(` Cancha con ID ${id} eliminada `);
        return cancha_eliminar;
    } catch (error) {
        console.error(error);
        throw Error;
    }
}

export { eliminar_cancha_drizzle }