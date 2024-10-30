                                                                                                    import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { deportista } from '../entity/deportista';

const routerdeportista = Router();
const deportistaRepository = AppDataSource.getRepository(deportista);

routerdeportista.get('/', async (req, res) => {
  const deportistas = await deportistaRepository.find();
  res.json(deportistas);
});

routerdeportista.get('/:id', async (req, res) => {
    const { id } = req.params;
    
    try {
        const deportistaBuscado = await deportistaRepository.findOne({
        where: { id: id },
        });
    
        if (deportistaBuscado) {
        res.json(deportistaBuscado);
        } else {
        res.status(404).json({ message: 'Deportista no encontrado' });
    }
    } catch (error) {
        res.status(404).json({ message: 'Deportista no encontrado' });
    }
    });

routerdeportista.post('/', async (req, res) => {
    const {nombre, identificacion, equipo } = req.body;
    if (!nombre || !identificacion || !equipo) {
        return res.status(400).json({ message: "Todos los campos son requeridos." });
    }

    try {
        const deportistaNuevo = await deportistaRepository.save({ nombre, identificacion, equipo });
        
        res.status(201).json(deportistaNuevo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear el deportista." });
    }
});

routerdeportista.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { nombre, identificacion, equipo } = req.body;
    let cambio = await deportistaRepository.findOne({
        where: { id: id },
    });
    if (cambio) {
        if (nombre !== undefined) {
        cambio.nombre = nombre;
        }
        if (identificacion !== undefined) {
        cambio.identificacion = identificacion;
        }
        if (equipo !== undefined) {
        cambio.equipo = equipo;
        }
        await deportistaRepository.save(cambio);
        res.json(cambio);
    } else {
        res.status(404).json({ message: "No se encontro el deportista" });
    }
});

routerdeportista.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await deportistaRepository.delete(id);
    res.json(result);
});

export default routerdeportista;