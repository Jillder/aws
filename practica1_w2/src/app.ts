//========================================= RECORRER FOREACH ===================================================

// import { canchas, deportistas, separaciones } from "./archivos";
// import { recorrerFE } from "./archivos";

// const todosLosElementos = [...canchas, ...deportistas, ...separaciones];

// recorrerFE(todosLosElementos, (elemento) => {
//     console.log(elemento);
// });




//========================================= METODO BUSCAR ===================================================

// import { buscar } from "./archivos";

// buscar(1, 3, (error, resultado) => {
//     if (error) {
//         console.error(error.message);
//     } else {
//         console.log(resultado);
//     }
// });




//========================================= METODO BUSCAR CON PROMESAS ===================================================

// import { buscarPromises } from "./archivos";

// buscarPromises(3, 2)
//     .then((resultado) => {
//         console.log(resultado);
//     })
//     .catch((error) => {
//         console.error(error.message);
//     });




//========================================= METODO BUSCAR CON ASYNC AWAIT ===================================================

// import { buscarAsyncAwait } from "./archivos";

// async function main() {
//     try {
//         const resultado = await buscarAsyncAwait(5, 3);
//         console.log(resultado);
//     } catch (error) {
//         console.error(error);
//     }
// }
// main();




//========================================= FAKE REST API ===================================================================

import { Infpost, fetchData } from "./archivos";

async function main() {
    try {
        const posts = await fetchData<Infpost>('https://66da81e3f47a05d55be4fecd.mockapi.io/aws');
        console.log(posts);
    } catch (error) {
        console.error(error);
    }
}
main();