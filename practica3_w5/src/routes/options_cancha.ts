import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { cancha } from '../entity/cancha';

const routercancha = Router();

const canchaRepository = AppDataSource.getRepository(cancha);

routercancha.get('/', async (req, res) => {
  const canchas = await canchaRepository.find();
  res.json(canchas);
});

routercancha.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const canchaBuscada = await canchaRepository.findOne({
      where: { id: id },
    });

    if (canchaBuscada) {
      res.json(canchaBuscada);
    } else {
      res.status(404).json({ message: 'Cancha no encontrada' });
  }
  } catch (error) {
    res.status(404).json({ message: 'Cancha no encontrada' });
  }
});

routercancha.post('/', async (req, res) => {
  const { descripcion } = req.body;
  const canchaNueva = await canchaRepository.save({ descripcion });
  res.json(canchaNueva);
});


routercancha.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { descripcion } = req.body;
  let cambio = await canchaRepository.findOne(id);
  if (cambio) {
    cambio.descripcion = descripcion;
    await canchaRepository.save(cambio);
    res.json(cambio);
  } else {
    res.status(404).json({ message: "Option not found" });
  }
});

routercancha.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await canchaRepository.delete(id);
  res.json(result);
});

export default routercancha;
