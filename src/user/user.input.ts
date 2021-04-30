import { Field, InputType } from '@nestjs/graphql';
import { IsString, IsNumber } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  name: string;

  @Field()
  @IsString()
  email: string;

  @Field()
  @IsNumber()
  age: number;
}
