export class UpdateDeportistaDto {
    private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly identificacion?: string,
      public readonly equipo?: string,
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.nombre) returnObj.nombre = this.nombre;
      if (this.identificacion) returnObj.identificacion = this.identificacion;
      if (this.equipo) returnObj.equipo = this.equipo;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateDeportistaDto?] {
      const { id, nombre, identificacion, equipo } = props;
  
      if (!id || isNaN(Number(id))) {
        return ['id must be a valid number'];
      }
  
      return [undefined, new UpdateDeportistaDto(id, nombre, identificacion, equipo)];
    }
  }
  