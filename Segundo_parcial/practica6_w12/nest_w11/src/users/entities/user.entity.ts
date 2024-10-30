import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@Entity("users")
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Int)
  age: number;
}