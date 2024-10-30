"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.separaciones = exports.deportistas = exports.canchas = void 0;
const canchas = [
    { id: 1, descripcion: 'Cancha de Futbol' },
    { id: 2, descripcion: 'Cancha de Baloncesto' },
    { id: 3, descripcion: 'Cancha de Voleibol' },
    { id: 4, descripcion: 'Cancha de Tenis' },
    { id: 5, descripcion: 'Cancha de Futbol Sala' }
];
exports.canchas = canchas;
const deportistas = [
    { id: 1, nombre: 'Juan Perez', identificacion: '123456789', equipo: 'Equipo 1' },
    { id: 2, nombre: 'Pedro Perez', identificacion: '987654321', equipo: 'Equipo 2' },
    { id: 3, nombre: 'Maria Perez', identificacion: '123456789', equipo: 'Equipo 3' },
    { id: 4, nombre: 'Jose Perez', identificacion: '987654321', equipo: 'Equipo 4' },
    { id: 5, nombre: 'Carlos Perez', identificacion: '123456789', equipo: 'Equipo 5' }
];
exports.deportistas = deportistas;
const separaciones = [
    { id: 1, idCancha: 1, id_deportista: 1, fecha_separacion: new Date('2021-10-01'), hora_desde: '08:00', hora_hasta: '10:00' },
    { id: 2, idCancha: 2, id_deportista: 2, fecha_separacion: new Date('2021-10-01'), hora_desde: '10:00', hora_hasta: '12:00' },
    { id: 3, idCancha: 3, id_deportista: 3, fecha_separacion: new Date('2021-10-01'), hora_desde: '12:00', hora_hasta: '14:00' },
    { id: 4, idCancha: 4, id_deportista: 4, fecha_separacion: new Date('2021-10-01'), hora_desde: '14:00', hora_hasta: '16:00' },
    { id: 5, idCancha: 5, id_deportista: 5, fecha_separacion: new Date('2021-10-01'), hora_desde: '16:00', hora_hasta: '18:00' }
];
exports.separaciones = separaciones;
