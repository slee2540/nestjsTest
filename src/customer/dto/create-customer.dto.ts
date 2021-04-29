import { IsOptional, IsString } from 'class-validator';

export class CreateCustomerDTO {
  @IsString()
  first_name: string;
  @IsString()
  last_name: string;
  @IsString()
  email: string;
  @IsString()
  phone: string;
  @IsString()
  address: string;
  @IsString()
  description: string;

  @IsOptional()
  created_at: Date;
}
