export class CreateCanchaDto {
    private constructor(
      public readonly descripcion: string,
      public readonly reservas: any[],
    ) {}
  
    static create(props: { [key: string]: any }): [string?, CreateCanchaDto?] {
      const { descripcion, reservas } = props;
  
      if (!descripcion) return ['Descripcion is required', undefined];
  
      if (reservas && !Array.isArray(reservas)) {
        return ['Reservas must be an array', undefined];
      }
  
      return [undefined, new CreateCanchaDto(descripcion, reservas || [])];
    }
  }
  