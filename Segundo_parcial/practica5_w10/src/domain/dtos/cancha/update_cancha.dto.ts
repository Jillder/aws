export class UpdateCanchaDto {
    private constructor(
      public readonly id: number,
      public readonly descripcion?: string,
      public readonly reservas?: any[],
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.descripcion) returnObj.descripcion = this.descripcion;
      if (this.reservas) returnObj.reservas = this.reservas;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateCanchaDto?] {
      const { id, descripcion, reservas } = props;
  
      if (!id || isNaN(Number(id))) {
        return ['id must be a valid number', undefined];
      }
  
      if (reservas && !Array.isArray(reservas)) {
        return ['Reservas must be an array', undefined];
      }
  
      return [undefined, new UpdateCanchaDto(id, descripcion, reservas)];
    }
  }
  