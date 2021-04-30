// src/user/user.schema.ts
import { Field, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

import { IsString, IsNumber } from 'class-validator';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

@ObjectType()
export class User extends Document {
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
