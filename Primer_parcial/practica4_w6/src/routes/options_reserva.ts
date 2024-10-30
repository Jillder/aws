import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { reserva } from '../entity/reserva';
import { cancha } from '../entity/cancha';
import { deportista } from '../entity/deportista';
import { In } from 'typeorm';

const routerreserva = Router();
export const reservaRepository = AppDataSource.getRepository(reserva);
const canchaRepository = AppDataSource.getRepository(cancha);
const deportistaRepository = AppDataSource.getRepository(deportista);

routerreserva.get('/', async (req, res) => {
  const reservas = await reservaRepository.find();
  res.json(reservas);
});

routerreserva.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const reservaBuscada = await reservaRepository.findOne({
        where: { id: id },
        });
    
        if (reservaBuscada) {
        res.json(reservaBuscada);
        } else {
        res.status(404).json({ message: 'Reserva no encontrada' });
    }
    } catch (error) {
        res.status(404).json({ message: 'Reserva no encontrada' });
    }
    });

routerreserva.post('/', async (req, res) => {
    const {fecha, hora_desde, hora_hasta, idCancha, idDeportistas } = req.body;
    if (!fecha || !hora_desde || !hora_hasta || !idCancha || !idDeportistas) {
        return res.status(400).json({ message: "Todos los campos son requeridos." });
    }

    try {
        const cancha = await canchaRepository.findOne({
            where: { id: idCancha },
        });

        const deportistas = await deportistaRepository.findBy({ id: In(idDeportistas) });

        if (deportistas.length !== idDeportistas.length || !cancha) {
            return res.status(404).json({ message: "Deportista o cancha no encontrado." });
        }

        const reservaNueva = await reservaRepository.save({
            fecha, 
            hora_desde, 
            hora_hasta, 
            cancha,
            deportistas });

        res.status(201).json(reservaNueva);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear la reserva." });
    }
});

routerreserva.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { fecha, hora_desde, hora_hasta, idCancha, idDeportistas } = req.body;

    if (!fecha && !hora_desde && !hora_hasta && !idCancha && !idDeportistas) {
        return res.status(400).json({ message: "Al menos uno de los campos debe ser proporcionado." });
    }

    try{
        const reserva = await reservaRepository.findOne({where: {id: id}});

        if (!reserva) {
            return res.status(404).json({ message: "Reserva no encontrada." });
        }

        if (fecha) {
            reserva.fecha = fecha;
        }
        if (hora_desde) {
            reserva.hora_desde = hora_desde;
        }
        if (hora_hasta) {
            reserva.hora_hasta = hora_hasta;
        }
        if (idCancha) {
            const cancha = await canchaRepository.findOne({where: {id: idCancha}});
            if (!cancha) {
                return res.status(404).json({ message: "Cancha no encontradaa." });
            }
            reserva.cancha = cancha;
        }
        if (idDeportistas) {
            const deportistas = await deportistaRepository.findBy({ id: In(idDeportistas) });

            if (deportistas.length !== idDeportistas.length) {
                return res.status(404).json({ message: "Deportista no encontrado." });
            }
            reserva.deportistas = deportistas;
        }

        const reservaActualizada = await reservaRepository.save(reserva);
        res.status(200).json(reservaActualizada);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar la reserva." });
    }
});

routerreserva.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await reservaRepository.delete(id);
    res.json(result);
});

export default routerreserva;