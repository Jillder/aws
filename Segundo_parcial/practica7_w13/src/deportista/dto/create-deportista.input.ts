import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateDeportistaInput {
  @Field(() => String, { description: 'Nombre del deportista' })
  @IsString()
  @IsNotEmpty({ message: 'El nombre del deportista es obligatorio' })
  nombre: string;

  @Field(() => String, { description: 'Identificación del deportista' })
  @IsString()
  @IsNotEmpty({ message: 'La identificación del deportista es obligatoria' })
  identificacion: string;

  @Field(() => String, { description: 'Equipo del deportista' })
  @IsString()
  @IsNotEmpty({ message: 'El equipo del deportista es obligatorio' })
  equipo: string;
}
