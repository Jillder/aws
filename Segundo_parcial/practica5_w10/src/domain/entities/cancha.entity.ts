import { reserva } from "../../entity_typeorm/reserva";

export class CanchaEntity {

    constructor(
      public id: number,
      public descripcion: string,
      public reservas: reserva[] = [],
    ) {}
  
    public static fromObject(object: { [key: string]: any }): CanchaEntity {
      const { id, descripcion, reservas } = object;
  
      if (!id) throw 'Id is required';
      if (!descripcion) throw 'Descripcion is required';
  
      return new CanchaEntity(id, descripcion, reservas || []);
    }
  }
  