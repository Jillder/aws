export class CreateDeportistaDto {
    private constructor(
      public readonly nombre: string,
      public readonly identificacion: string,
      public readonly equipo: string,
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateDeportistaDto?] {
      const { nombre, identificacion, equipo } = props;
  
      if (!nombre) return ['Nombre property is required', undefined];
      if (!identificacion) return ['Identificacion property is required', undefined];
      if (!equipo) return ['Equipo property is required', undefined];
  
      return [undefined, new CreateDeportistaDto(nombre, identificacion, equipo)];
    }
  }
  