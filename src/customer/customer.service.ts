import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Customer } from './interface/customer.interface';
import { CreateCustomerDTO } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    // @InjectModel('Customer') private readonly customerModel: Model<Customer>,
    @Inject('CUSTOMER_MODEL') private readonly customerModel: Model<Customer>,
  ) {}

  // fetch all customers
  async getAllCustomer(): Promise<Customer[]> {
    const customers = await this.customerModel.find().exec();
    return customers;
  }
  // Get a single customer
  async getCustomer(customerID): Promise<Customer> {
    const customer = await this.customerModel.findById(customerID).exec();
    return customer;
  }
  // post a single customer
  async addCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
    console.log('=========>', createCustomerDTO);
    const newCustomer = await new this.customerModel(createCustomerDTO);
    return newCustomer.save();
  }
  // Edit customer details
  async updateCustomer(
    customerID,
    createCustomerDTO: CreateCustomerDTO,
  ): Promise<Customer> {
    const updatedCustomer = await this.customerModel.findByIdAndUpdate(
      customerID,
      createCustomerDTO,
      { new: true },
    );
    return updatedCustomer;
  }
  // Delete a customer
  async deleteCustomer(customerID): Promise<any> {
    const deletedCustomer = await this.customerModel.findByIdAndRemove(
      customerID,
    );
    return deletedCustomer;
  }
}
