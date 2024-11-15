import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional } from 'class-validator'; 

@InputType()
export class CreateCanchaInput {
  @Field(() => String, { description: 'Descripción de la cancha' })
  @IsString() 
  @IsOptional() 
  descripcion: string;
}
