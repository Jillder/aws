import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateCanchaDto {
    @IsOptional()
    @IsNumber()
    id: number;

    @IsString()
    @MinLength(4)
    @IsNotEmpty()
    descripcion: string;
}
