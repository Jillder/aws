import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateDeportistaDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    nombre: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    identificacion: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(4)
    equipo: string;
}

