import "reflect-metadata";
import { AppDataSource } from "./data-source"
import routerusuario from "./routes/options_usuario"
import express from 'express';
import { jwtMiddleware } from "./middleware/jwt";
import routerreserva from "./routes/options_reserva";

const app = express();
app.use(express.json());

AppDataSource.initialize().then(async () => {
    app.use('/usuario', routerusuario);
    app.use('/reserva', jwtMiddleware, routerreserva);
 
    app.listen(3000, () => {
        console.log('Servidor iniciado en el puerto 3000');
    });
}).catch(error => {
    console.error(error);
});



