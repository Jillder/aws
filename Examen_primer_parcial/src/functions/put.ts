import express, { Request, Response } from 'express';
import connect from '../data_source'; // Asegúrate de importar correctamente tu conexión

const router = express.Router();

router.put('/update/:entity/:id', (req: Request, res: Response) => {
    const { entity, id } = req.params; // Extraemos el nombre de la entidad y el id del elemento
    const { entornoId } = req.body; // Asumimos que el nuevo entorno viene en el cuerpo de la solicitud

    return new Promise((resolve, reject) => {
        connect().then(async (connection) => {
            try {
                let result;

                switch (entity) {
                    case 'cancha':
                        result = await connection.execute(
                            'UPDATE cancha SET entornoId = ? WHERE id = ?',
                            [entornoId, id]
                        );
                        break;

                    case 'deportista':
                        result = await connection.execute(
                            'UPDATE deportista SET entornoId = ? WHERE id = ?',
                            [entornoId, id]
                        );
                        break;

                    case 'reserva':
                        result = await connection.execute(
                            'UPDATE reserva SET entornoId = ? WHERE id = ?',
                            [entornoId, id]
                        );
                        break;

                    default:
                        return reject({ status: 400, message: 'Entidad no válida' });
                }

                // Comprobar si la actualización tuvo éxito
                const [queryResult] = result as unknown as { affectedRows: number }[];
                if (queryResult.affectedRows > 0) {
                    resolve({ status: 200, message: 'Actualización exitosa' });
                } else {
                    resolve({ status: 404, message: 'Elemento no encontrado o no se realizaron cambios' });
                }
            } catch (error) {
                console.error("Error durante la actualización:", error);
                reject({ status: 500, message: 'Error interno del servidor' });
            } finally {
                await connection.end();
            }
        }).catch(error => {
            console.error("Error en la conexión:", error);
            reject({ status: 500, message: 'Error de conexión a la base de datos' });
        });
    }).then((response) => {
        const { status, message } = response as { status: number, message: string };
        // Enviar respuesta
        res.status(status).json({ message });
    }).catch(error => {
        // Manejar error
        res.status(error.status).json({ error: error.message });
    });
});

export default router;
