//================================== CREAR CANCHA ============================================

// import { AppDataSource } from "./data-source";
// import { crearCancha } from "./fuctions/crear_cancha";

// async function main() {
//     await AppDataSource.initialize();
//     const cancha = await crearCancha("Cancha de volley")
//     console.log(cancha)
//     await AppDataSource.destroy();
// }

// main().then(() => {
//     console.log("Done")
// }).catch((error) => {
//     console.error(error)
// })


//================================== CREAR DEPORTISTA ============================================

// import { AppDataSource } from "./data-source";
// import { crearDeportista } from "./fuctions/crear_deportista";

// async function main() {
//     await AppDataSource.initialize();
//     const deportista = await crearDeportista("Pedro", "654321", "Equipo 2")
//     console.log(deportista)
//     await AppDataSource.destroy();
// }

// main().then(() => {
//     console.log("Done")
// }).catch((error) => {
//     console.error(error)
// })


//================================== CREAR RESERVA ============================================

// import { AppDataSource } from "./data-source";
// import { crearReserva } from "./fuctions/crear_reserva";

// async function main() {
//     await AppDataSource.initialize();
//     const reserva = await crearReserva("2021-10-10", "10:00", "12:00", 1, [1, 2])
//     console.log(reserva)
//     await AppDataSource.destroy();
// }

// main().then(() => {
//     console.log("Done")
// }).catch((error) => {
//     console.error(error)
// })


//================================== LISTAR CANCHAS ============================================

// import { AppDataSource } from "./data-source";
// import { listarCanchas } from "./fuctions/listar_Canchas";

// async function main() {
//     await AppDataSource.initialize();
//     const canchas = await listarCanchas()
//     console.log(canchas)
//     await AppDataSource.destroy();
// }

// main().then(() => {
//     console.log("Done")
// }).catch((error) => {
//     console.error(error)
// })


//================================== LISTAR DEPORTISTAS ============================================

// import { AppDataSource } from "./data-source";
// import { listarDeportistas } from "./fuctions/listar_deportistas";

// async function main() {
//     await AppDataSource.initialize();
//     const deportistas = await listarDeportistas()
//     console.log(deportistas)
//     await AppDataSource.destroy();
// }

// main().then(() => {
//     console.log("Done")
// }).catch((error) => {
//     console.error(error)
// })


//================================== LISTAR RESERVAS ============================================

// import { AppDataSource } from "./data-source";
// import { listarReservas } from "./fuctions/listar_reservas";

// async function main() {
//     await AppDataSource.initialize();
//     const reservas = await listarReservas()
//     console.log(reservas)
//     await AppDataSource.destroy();
// }

// main().then(() => {
//     console.log("Done")
// }).catch((error) => {
//     console.error(error)
// })


//================================== ELIMINAR RESERVA ============================================

// import { poolConexiones } from "./drizzle";
// import { eliminar_reserva_drizzle } from "./fuctions/eliminar_reserva_drizzle";

// async function main() {
//     await eliminar_reserva_drizzle(1)
//     await poolConexiones.end();
// }

// main().then(() => {
//     console.log("Done")
// }).catch((error) => {
//     console.error(error)
// })

//================================== ACTUALIZAR DEPORTISTA ============================================

import { poolConexiones } from "./drizzle";
import { actualizar_deportista_drizzle } from "./fuctions/actualizar_deportista_drizzle";

async function main() {
    const cambio = {
        equipo: "Equipo 3"
    }
    await actualizar_deportista_drizzle(2, cambio)
    await poolConexiones.end();
}

main().then(() => {
    console.log("Done")
}).catch((error) => {
    console.error(error)
})