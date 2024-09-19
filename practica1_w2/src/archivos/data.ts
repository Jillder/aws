interface Infcancha {
    id: number;
    descripcion: string;
}

interface Infdeportista {
    id: number;
    nombre: string;
    identificacion: string;
    equipo: string;
}

interface Infseparacion {
    id: number;
    id_cancha: Infcancha['id'];
    id_deportista: Infdeportista['id'];
    fecha_separacion: String;
    hora_desde: string;
    hora_hasta: string;
}

const canchas: Infcancha[] = [
    { id: 1, descripcion: 'Cancha de Futbol' },
    { id: 2, descripcion: 'Cancha de Baloncesto' },
    { id: 3, descripcion: 'Cancha de Voleibol' },
    { id: 4, descripcion: 'Cancha de Tenis' },
    { id: 5, descripcion: 'Cancha de Futbol Sala' }
];

const deportistas: Infdeportista[] = [
    { id: 1, nombre: 'Juan Perez', identificacion: '123456789', equipo: 'Equipo 1' },
    { id: 2, nombre: 'Pedro Perez', identificacion: '987654321', equipo: 'Equipo 2' },
    { id: 3, nombre: 'Maria Perez', identificacion: '123456789', equipo: 'Equipo 3' },
    { id: 4, nombre: 'Jose Perez', identificacion: '987654321', equipo: 'Equipo 4' },
    { id: 5, nombre: 'Carlos Perez', identificacion: '123456789', equipo: 'Equipo 5' },
];

const separaciones: Infseparacion[] = [
    { id: 1, id_cancha: 1, id_deportista: 1, fecha_separacion: "2021-10-01", hora_desde: '08:00', hora_hasta: '10:00' },
    { id: 2, id_cancha: 2, id_deportista: 2, fecha_separacion: "2021-10-01", hora_desde: '10:00', hora_hasta: '12:00' },
    { id: 3, id_cancha: 3, id_deportista: 3, fecha_separacion: "2021-10-01", hora_desde: '12:00', hora_hasta: '14:00' },
    {id: 4, id_cancha: 4, id_deportista: 4, fecha_separacion: "2021-10-01", hora_desde: '14:00', hora_hasta: '16:00' },
    {id: 5, id_cancha: 5, id_deportista: 5, fecha_separacion: "2021-10-01", hora_desde: '16:00', hora_hasta: '18:00' },
];

export { canchas, deportistas, separaciones, Infcancha, Infdeportista, Infseparacion };