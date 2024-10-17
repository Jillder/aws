import mysql from 'mysql2/promise'; // Asegúrate de importar mysql2
import connect from '../data_source';

export async function migrateData(entidades: any) {
    const connection = await connect();

    try {
        // Validar e insertar entidades de cancha
        for (const cancha of entidades.cancha.datos) {
            if (cancha.descripcion && cancha.entornoId) {
                await connection.execute(
                    'INSERT INTO cancha (descripcion, entornoId) VALUES (?, ?)',
                    [cancha.descripcion, cancha.entornoId]
                );
            } else {
                console.error("Faltan datos de cancha:", cancha);
            }
        }

        // Validar e insertar entidades de deportista
        for (const deportista of entidades.deportista.datos) {
            if (deportista.nombre && deportista.identificacion && deportista.equipo && deportista.entornoId) {
                await connection.execute(
                    'INSERT INTO deportista (nombre, identificacion, equipo, entornoId) VALUES (?, ?, ?, ?)',
                    [deportista.nombre, deportista.identificacion, deportista.equipo, deportista.entornoId]
                );
            } else {
                console.error("Faltan datos de deportista:", deportista);
            }
        }

        // Validar e insertar reservas
        for (const reserva of entidades.reserva.datos) {
            if (reserva.idCancha && reserva.fechaSeparacion && reserva.horaDesde && reserva.horaHasta && reserva.entornoId) {
                // Inserta la reserva y obtiene el ID de la reserva insertada
                const [result] = await connection.execute(
                    'INSERT INTO reserva (idCancha, fechaSeparacion, horaDesde, horaHasta, entornoId) VALUES (?, ?, ?, ?, ?)',
                    [reserva.idCancha, reserva.fechaSeparacion, reserva.horaDesde, reserva.horaHasta, reserva.entornoId]
                );

                // Verificar que result está definido y que tiene insertId
                if (result && 'insertId' in result) {
                    const reservaId = result.insertId; // Usamos directamente el insertId aquí

                    // Insertar deportistas en la reserva usando el reservaId
                    for (const deportista of reserva.deportistas) {
                        if (deportista.idDeportista) {
                            await connection.execute(
                                'INSERT INTO reserva_deportistas (reservaId, deportistaId) VALUES (?, ?)',
                                [reservaId, deportista.idDeportista]
                            );
                        } else {
                            console.error("Faltan datos de deportista en reserva:", deportista);
                        }
                    }
                } else {
                    console.error("Error al insertar reserva: resultado no válido", result);
                }
            } else {
                console.error("Faltan datos de reserva:", reserva);
            }
        }

        console.log("Migración completada correctamente.");
    } catch (error) {
        console.error("Error durante la migración:", error);
    } finally {
        await connection.end();
    }
}
