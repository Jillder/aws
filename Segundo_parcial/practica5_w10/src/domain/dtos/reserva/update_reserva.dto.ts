export class UpdateReservaDto {

    private constructor(
      public readonly id: number,
      public readonly fecha?: string,
      public readonly horaDesde?: string,
      public readonly horaHasta?: string,
      public readonly canchaId?: number,
      public readonly deportistaIds?: number[],
    ) {}
  
    get values() {
      const returnObj: { [key: string]: any } = {};
  
      if (this.fecha) returnObj.fecha = this.fecha;
      if (this.horaDesde) returnObj.horaDesde = this.horaDesde;
      if (this.horaHasta) returnObj.horaHasta = this.horaHasta;
      if (this.canchaId) returnObj.canchaId = this.canchaId;
      if (this.deportistaIds) returnObj.deportistaIds = this.deportistaIds;
  
      return returnObj;
    }
  
    static create(props: { [key: string]: any }): [string?, UpdateReservaDto?] {
      const { id, fecha, horaDesde, horaHasta, canchaId, deportistaIds } = props;
  
      if (!id || isNaN(Number(id))) {
        return ['id must be a valid number'];
      }
  
      if (deportistaIds && (!Array.isArray(deportistaIds) || deportistaIds.some(isNaN))) {
        return ['deportistaIds must be an array of valid numbers'];
      }
  
      return [
        undefined,
        new UpdateReservaDto(id, fecha, horaDesde, horaHasta, canchaId, deportistaIds),
      ];
    }
  }
  