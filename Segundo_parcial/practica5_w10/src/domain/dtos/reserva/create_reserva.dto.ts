export class CreateReservaDto {

    private constructor(
      public readonly fecha: string,
      public readonly horaDesde: string,
      public readonly horaHasta: string,
      public readonly canchaId: number,
      public readonly deportistaIds: number[],
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateReservaDto?] {
      const { fecha, horaDesde, horaHasta, canchaId, deportistaIds } = props;
  
      if (!fecha) return ['Fecha property is required', undefined];
      if (!horaDesde) return ['HoraDesde property is required', undefined];
      if (!horaHasta) return ['HoraHasta property is required', undefined];
      if (!canchaId) return ['CanchaId property is required', undefined];
      if (!deportistaIds || !Array.isArray(deportistaIds) || deportistaIds.length === 0) {
        return ['DeportistaIds property is required and must be a non-empty array', undefined];
      }
  
      return [
        undefined,
        new CreateReservaDto(fecha, horaDesde, horaHasta, canchaId, deportistaIds),
      ];
    }
  }
  