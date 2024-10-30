import request from 'supertest';
import { usuarioRepository } from '../routes/options_usuario';
import { app, server} from '../index';
import { AppDataSource } from '../data-source';


beforeAll(async () => {
    await AppDataSource.initialize();
});

afterAll(async () => {
    await usuarioRepository.clear();
    await AppDataSource.destroy();

});

afterEach(async () => {
    server.close();
});


describe('Test de opciones de usuario', () => {
    it('Crea un usuario', async () => {
        const res = await request(app)
            .post('/usuario')
            .send({ nombre: 'usuario1', clave: 'clave1', estado: 'activo' });
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('message', 'Usuario creado con exito.');
    });

    it('Crea un usuario con campos vacíos', async () => {
        const res = await request(app)
            .post('/usuario')
            .send({ nombre: '', clave: '', estado: '' });
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('message', 'Todos los campos son requeridos.');
    });

    it('Crea un usuario existente', async () => {
        const res = await request(app)
            .post('/usuario')
            .send({ nombre: 'usuario1', clave: 'clave1', estado: 'activo' });
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('message', 'El usuario ya existe.');
    });

    it('Crea un usuario con contraseña incorrecta', async () => {
        const res = await request(app)
            .post('/usuario/token')
            .send({ nombre: 'usuario1', clave: 'clave2' });
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('message', 'Contraseña incorrecta.');
    });

    it('Crea un usuario con nombre incorrecto', async () => {
        const res = await request(app)
            .post('/usuario/token')
            .send({ nombre: 'usuario2', clave: 'clave1' });
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('message', 'Usuario no encontrado.');
    });

    it('Crea un usuario con campos vacíos', async () => {
        const res = await request(app)
            .post('/usuario/token')
            .send({ nombre: '', clave: '' });
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('message', 'Falta el nombre o contraseña.');
    });

    it('Genera un token para un usuario válido', async () => {
        const res = await request(app)
            .post('/usuario/token')
            .send({ nombre: 'usuario1', clave: 'clave1' });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('token');
    });

    it('No genera un token para un usuario con estado inactivo', async () => {
        await request(app)
            .post('/usuario')
            .send({ nombre: 'usuario3', clave: 'clave3', estado: 'inactivo' });

        const res = await request(app)
            .post('/usuario/token')
            .send({ nombre: 'usuario3', clave: 'clave3' });
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('message', 'Usuario inactivo.');
    });
});

