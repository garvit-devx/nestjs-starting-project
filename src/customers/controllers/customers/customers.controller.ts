import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';

import { ICustomer, CustomerDTO } from 'types';
import { ALL_CUSTOMERS } from 'DUMMY_DATA/customers';

@Controller('customers')
export class CustomersController {
  @Get()
  getAllCustomers() {
    return ALL_CUSTOMERS;
  }

  @Get(':id')
  getCustomerById(@Req() request: Request<{ id: string }>) {
    const requiredCustomer = ALL_CUSTOMERS.find(
      (cust) => cust.id === Number(request.params.id),
    );
    return requiredCustomer;
  }

  @Post('new')
  addNewCustomer(@Req() request: Request<{ body: CustomerDTO }>) {
    const newCustomer: ICustomer = {
      ...request.body,
      id:
        ALL_CUSTOMERS.length > 0
          ? ALL_CUSTOMERS[ALL_CUSTOMERS.length - 1].id + 1
          : 1,
    };
    ALL_CUSTOMERS.push(newCustomer); // Only creates a new entry in the in-memory DB. Does not write the new entry in the file
    return newCustomer;
  }
}
