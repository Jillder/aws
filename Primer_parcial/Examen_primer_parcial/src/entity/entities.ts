const entidades = {
    // entorno: {
    //     totalelementos: 3,
    //     tipo: 'maestro',
    //     datos: [
    //         { descripcion: "desarrollo" },
    //         { descripcion: "pruebas" },
    //         { descripcion: "producción" }
    //     ]
    // },
    cancha: {
        totalelementos: 10,
        tipo: 'maestro',
        datos: [
            { descripcion: "Cancha de fútbol", entornoId: 1 },
            { descripcion: "Cancha de tenis", entornoId: 1 },
            { descripcion: "Cancha de básquetbol", entornoId: 2 },
            { descripcion: "Cancha de voleibol", entornoId: 2 },
            { descripcion: "Cancha de pádel", entornoId: 3 },
            { descripcion: "Cancha de hockey", entornoId: 3 },
            { descripcion: "Cancha de bádminton", entornoId: 1 },
            { descripcion: "Cancha de squash", entornoId: 2 },
            { descripcion: "Cancha de rugby", entornoId: 3 },
            { descripcion: "Cancha de cricket", entornoId: 1 }
        ]
    },
    deportista: {
        totalelementos: 10,
        tipo: 'maestro',
        datos: [
            { nombre: "Juan Pérez", identificacion: "12345678", equipo: "Equipo A", entornoId: 1 },
            { nombre: "María García", identificacion: "87654321", equipo: "Equipo B", entornoId: 2 },
            { nombre: "Carlos Rodríguez", identificacion: "13579135", equipo: "Equipo C", entornoId: 3 },
            { nombre: "Ana López", identificacion: "24681012", equipo: "Equipo D", entornoId: 1 },
            { nombre: "Luis Martínez", identificacion: "11223344", equipo: "Equipo E", entornoId: 2 },
            { nombre: "Sofía Fernández", identificacion: "55667788", equipo: "Equipo F", entornoId: 3 },
            { nombre: "Pedro González", identificacion: "99001122", equipo: "Equipo G", entornoId: 1 },
            { nombre: "Lucía Ramírez", identificacion: "44332211", equipo: "Equipo H", entornoId: 2 },
            { nombre: "Diego Torres", identificacion: "77445566", equipo: "Equipo I", entornoId: 3 },
            { nombre: "Marta Sánchez", identificacion: "99887766", equipo: "Equipo J", entornoId: 1 }
        ]
    },
    reserva: {
        totalelementos: 10,
        tipo: 'transaccional',
        datos: [
            {
                idCancha: 1,
                deportistas: [
                    { idDeportista: 1 }, 
                    { idDeportista: 2 }
                ],
                fechaSeparacion: "2024-10-17",
                horaDesde: "10:00",
                horaHasta: "11:00",
                entornoId: 1
            },
            {
                idCancha: 2,
                deportistas: [
                    { idDeportista: 3 }, 
                    { idDeportista: 4 }
                ],
                fechaSeparacion: "2024-10-18",
                horaDesde: "12:00",
                horaHasta: "13:00",
                entornoId: 2
            },
            {
                idCancha: 3,
                deportistas: [
                    { idDeportista: 5 }, 
                    { idDeportista: 6 }
                ],
                fechaSeparacion: "2024-10-19",
                horaDesde: "14:00",
                horaHasta: "15:00",
                entornoId: 3
            },
            {
                idCancha: 4,
                deportistas: [
                    { idDeportista: 7 }, 
                    { idDeportista: 8 }
                ],
                fechaSeparacion: "2024-10-20",
                horaDesde: "16:00",
                horaHasta: "17:00",
                entornoId: 1
            },
            {
                idCancha: 5,
                deportistas: [
                    { idDeportista: 9 }, 
                    { idDeportista: 10 }
                ],
                fechaSeparacion: "2024-10-21",
                horaDesde: "18:00",
                horaHasta: "19:00",
                entornoId: 2
            },
            {
                idCancha: 6,
                deportistas: [
                    { idDeportista: 1 }, 
                    { idDeportista: 3 }
                ],
                fechaSeparacion: "2024-10-22",
                horaDesde: "20:00",
                horaHasta: "21:00",
                entornoId: 3
            },
            {
                idCancha: 7,
                deportistas: [
                    { idDeportista: 2 }, 
                    { idDeportista: 5 }
                ],
                fechaSeparacion: "2024-10-23",
                horaDesde: "22:00",
                horaHasta: "23:00",
                entornoId: 1
            },
            {
                idCancha: 8,
                deportistas: [
                    { idDeportista: 4 }, 
                    { idDeportista: 6 }
                ],
                fechaSeparacion: "2024-10-24",
                horaDesde: "09:00",
                horaHasta: "10:00",
                entornoId: 2
            },
            {
                idCancha: 9,
                deportistas: [
                    { idDeportista: 7 }, 
                    { idDeportista: 8 }
                ],
                fechaSeparacion: "2024-10-25",
                horaDesde: "11:00",
                horaHasta: "12:00",
                entornoId: 3
            },
            {
                idCancha: 10,
                deportistas: [
                    { idDeportista: 9 }, 
                    { idDeportista: 10 }
                ],
                fechaSeparacion: "2024-10-26",
                horaDesde: "13:00",
                horaHasta: "14:00",
                entornoId: 1
            }
        ]
    }
};

export default entidades;
