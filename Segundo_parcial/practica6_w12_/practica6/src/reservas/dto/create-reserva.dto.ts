import { IsDateString, IsNumber, IsOptional, IsString, Matches, MinLength } from "class-validator";

export class CreateReservaDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsString()
    @IsDateString()
    fecha: string;

    @IsString()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
        message: 'time must be in the format HH:mm or HH:mm:ss',
      })
    horaDesde: string;

    @IsString()
    @Matches(/^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/, {
        message: 'time must be in the format HH:mm or HH:mm:ss',
      })
    horaHasta: string;

    @IsNumber()
    canchaId: number;

    @IsNumber({}, { each: true })
    deportistasIds: number[];
    
}
