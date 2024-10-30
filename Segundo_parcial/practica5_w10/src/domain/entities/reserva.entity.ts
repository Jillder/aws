import { cancha } from "../../entity_typeorm/cancha";
import { deportista } from "../../entity_typeorm/deportista";

export class ReservaEntity {

    constructor(
      public id: number,
      public fecha: string,
      public horaDesde: string,
      public horaHasta: string,
      public canchaId: number,
      public deportistaIds: number[],
      public cancha: cancha,
      public deportistas: deportista[] = []
    ) {}
  
    public static fromObject(object: { [key: string]: any }): ReservaEntity {
      const { id, fecha, horaDesde, horaHasta, canchaId, deportistaIds, cancha, deportistas } = object;
  
      if (!id) throw 'Id is required';
      if (!fecha) throw 'Fecha is required';
      if (!horaDesde) throw 'HoraDesde is required';
      if (!horaHasta) throw 'HoraHasta is required';
      if (!canchaId) throw 'CanchaId is required';
      if (!deportistaIds || !Array.isArray(deportistaIds) || deportistaIds.length === 0) {
        throw 'DeportistaIds must be a non-empty array';
      }
  
      return new ReservaEntity(
        id, 
        fecha, 
        horaDesde, 
        horaHasta, 
        canchaId, 
        deportistaIds, 
        cancha, 
        deportistas || []
      );
    }
  }
  