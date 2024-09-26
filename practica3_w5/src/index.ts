import "reflect-metadata";
import { AppDataSource } from "./data-source";
import express from "express";
import routercancha from "./routes/options_cancha";

const app = express();
app.use(express.json());

AppDataSource.initialize().then(async () => {
  app.use('/options', routercancha);

  app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
  });
}).catch(error => console.log(error));
