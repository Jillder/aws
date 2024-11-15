import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreateCanchaInput } from './create-cancha.input';

@InputType()
export class UpdateCanchaInput extends PartialType(CreateCanchaInput) {
  @Field(() => Int, { description: 'ID de la cancha a actualizar' })
  @IsInt()
  @IsNotEmpty({ message: 'El campo id es obligatorio y debe ser un entero' })
  id: number;
}
