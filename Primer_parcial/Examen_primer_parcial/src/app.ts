// import express from 'express';
// import bodyParser from 'body-parser';
// import router from './functions/put'; // Asegúrate de importar correctamente tu router

// const app = express();
// app.use(express.json()); // Necesario para poder parsear el cuerpo en JSON

// // Define la ruta PUT
// app.put('/update/:entity/:id', router);

// // Otros middlewares o rutas

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Servidor escuchando en el puerto ${PORT}`);
// });

import { actualizarEntornoDB } from "./functions/change_environment";

actualizarEntornoDB()
.then((result) => {
  console.log(`Elementos en fase de desarrollo: ${result.enDesarrollo}`);
  console.log(`Elementos en fase de pruebas: ${result.enPruebas}`);
})
.catch((error) => {
  console.error('Error en la migración:', error);
});