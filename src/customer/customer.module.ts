import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { customerProviders } from './customer.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [CustomerService, ...customerProviders],
  controllers: [CustomerController],
  exports: [CustomerService],
})
export class CustomerModule {}
