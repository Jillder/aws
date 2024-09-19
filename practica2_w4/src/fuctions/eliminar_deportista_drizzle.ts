import { eq } from "drizzle-orm";
import { drizzleConnection } from "../drizzle";
import { deportista } from "../entity/deportista_drizzle";

async function eliminar_deportista_drizzle(id:number) {
    try {
        const deportista_eliminar = await drizzleConnection.delete(deportista).where(eq(deportista.id, id));
        console.log(` Deportista con ID ${id} eliminado `);
        return deportista_eliminar;
    }  catch (error) {
        console.error(error);
        throw Error;
    }
}

export { eliminar_deportista_drizzle }