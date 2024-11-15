import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateDeportistaInput } from './create-deportista.input';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateDeportistaInput extends PartialType(CreateDeportistaInput) {
  @Field(() => Int, { description: 'ID de la deporte a actualizar' })
  @IsInt()
  @IsNotEmpty({ message: 'El campo id es obligatorio y debe ser un entero' })
  id: number;
}
