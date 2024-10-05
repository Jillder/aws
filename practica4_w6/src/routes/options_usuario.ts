import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { usuario } from '../entity/usuario';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const routerusuario = Router();
export const usuarioRepository = AppDataSource.getRepository(usuario);
const secret = 'helloworld';

routerusuario.post('/', async (req, res) => {
    const {nombre, clave, estado} = req.body;
    if (!nombre || !clave || !estado) {
        return res.status(400).json({ message: "Todos los campos son requeridos." });
    }

    try {
        const usuarioExistente = await usuarioRepository.findOneBy({ nombre });
        if (usuarioExistente) {
            return res.status(400).json({ message: "El usuario ya existe." });
        }else {
            const salt = await bcrypt.genSalt(10);
            const claveHash = await bcrypt.hash(clave, salt);
            const usuarioNuevo = usuarioRepository.create({ nombre, clave: claveHash, estado });
            await usuarioRepository.save(usuarioNuevo);
            return res.status(201).json(usuarioNuevo);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al crear el usuario." });
    }
});

routerusuario.post('/token', async (req, res) => {
    const { nombre, clave } = req.body;

    if (!nombre || !clave) {
        return res.status(400).json({ message: "Falta el nombre o contraseña." });
    }

    const usuarioExistente = await usuarioRepository.findOneBy({ nombre });
    if (!usuarioExistente) {
        return res.status(400).json({ message: "Usuario no encontrado." });
    }

    const verify_password = await bcrypt.compare(clave, usuarioExistente.clave);
    if (!verify_password) {
        return res.status(400).json({ message: "Contraseña incorrecta." });
    }

    const payload = {
        id: usuarioExistente.id,
        nombre: usuarioExistente.nombre,
        clave: usuarioExistente.clave,
        estado: usuarioExistente.estado
    };

    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    res.json({ token });
});

export default routerusuario;