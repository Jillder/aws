import connect from "../data_source";

export async function actualizarEntornoDB() {
    try {
        const connection = await connect();

        // Cambiar todos los registros en entornoId 1 (desarrollo) a entornoId 2 (pruebas)
        const [resultDesarrolloToPruebas] = await connection.execute(`
            UPDATE reserva 
            SET entornoId = 2 
            WHERE entornoId = 1
        `);

        // Cambiar todos los registros en entornoId 2 (pruebas) a entornoId 1 (desarrollo),
        // pero asegurando que no fueron ya actualizados por la consulta anterior.
        const [resultPruebasToDesarrollo] = await connection.execute(`
            UPDATE reserva 
            SET entornoId = 1 
            WHERE entornoId = 2 AND fechaSeparacion NOT IN (
                SELECT fechaSeparacion FROM reserva WHERE entornoId = 1
            )
        `);

        // Contar el número de registros que ahora están en entornoId 1 (desarrollo)
        const [rowsDesarrollo]: any = await connection.execute(`
            SELECT COUNT(*) as count FROM reserva WHERE entornoId = 1
        `);
        
        // Contar el número de registros que ahora están en entornoId 2 (pruebas)
        const [rowsPruebas]: any = await connection.execute(`
            SELECT COUNT(*) as count FROM reserva WHERE entornoId = 2
        `);

        // Acceder a los valores de "count" correctamente
        const enDesarrollo = rowsDesarrollo[0].count;
        const enPruebas = rowsPruebas[0].count;

        // Mostrar resultados
        return {
            enDesarrollo: enDesarrollo,
            enPruebas: enPruebas
        };
    } catch (error) {
        console.error('Error al actualizar entornos:', error);
        throw error;
    }
}