import { reserva } from "../../entity_typeorm/reserva";

export class DeportistaEntity {

    constructor(
      public id: number,
      public nombre: string,
      public identificacion: string,
      public equipo: string,
      public reservas: reserva[] = [],
    ) {}
  
    public static fromObject(object: { [key: string]: any }): DeportistaEntity {
      const { id, nombre, identificacion, equipo, reservas } = object;
  
      if (!id) throw 'Id is required';
      if (!nombre) throw 'Nombre is required';
      if (!identificacion) throw 'Identificacion is required';
      if (!equipo) throw 'Equipo is required';
  
      return new DeportistaEntity(id, nombre, identificacion, equipo, reservas || []);
    }
  }
  