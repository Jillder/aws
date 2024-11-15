import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateSeparacionCanchaInput } from './create-separacioncancha.input';
import { IsInt, IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateSeparacionCanchaInput extends PartialType(CreateSeparacionCanchaInput) {
  @Field(() => Int, { description: 'ID de la separacion a actualizar' })
  @IsInt()
  @IsNotEmpty({ message: 'El campo id es obligatorio y debe ser un entero' })
  id: number;
}

