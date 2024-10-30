import jwt from 'jsonwebtoken';

const secret = 'helloworld';

export const jwtMiddleware = (req , res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Ingrese el token' });
    }

    try {
        const decoded = jwt.verify(token, secret);
        console.log(decoded);

        if (decoded.estado!=='Activo') {
            return res.status(401).json({ message: 'Usuario inactivo, acceso denegado' });
        }
        next();
    }catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
}