import "reflect-metadata";
import { AppDataSource } from "./data-source";
import express from "express";
import routercancha from "./routes/options_cancha";
import routerdeportista from "./routes/options_deportista";
import routerreserva from "./routes/options_reserva";

const app = express();
app.use(express.json());

AppDataSource.initialize().then(async () => {
  app.use('/canchas', routercancha);
  app.use('/deportistas', routerdeportista);
  app.use('/reservas', routerreserva);

  app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
  });
}).catch(error => console.log(error));
