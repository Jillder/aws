import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsString, IsDateString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateSeparacionCanchaInput {
  @Field(() => Int, { description: 'ID de la cancha asociada' })
  @IsInt({ message: 'El ID de la cancha debe ser un número entero' })
  idCancha: number;

  @Field(() => Int, { description: 'ID del deportista asociado' })
  @IsInt({ message: 'El ID del deportista debe ser un número entero' })
  idDeportista: number;

  @Field(() => String, { description: 'Fecha de la separación' })
  @IsString()
  fechaSeparacion: string;

  @Field(() => String, { description: 'Hora de inicio de la separación' })
  @IsString({ message: 'La hora de inicio debe ser una cadena' })
  @IsNotEmpty({ message: 'La hora de inicio es obligatoria' })
  horaDesde: string;

  @Field(() => String, { description: 'Hora de finalización de la separación' })
  @IsString({ message: 'La hora de finalización debe ser una cadena' })
  @IsNotEmpty({ message: 'La hora de finalización es obligatoria' })
  horaHasta: string;
}
