import "reflect-metadata";
import { AppDataSource } from "./data-source"
import routerusuario from "./routes/options_usuario"
import express from 'express';
import { jwtMiddleware } from "./middleware/jwt";
import routerreserva from "./routes/options_reserva";

const app = express();
app.use(express.json());
    
app.use('/usuario', routerusuario);

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

export {app, server};


