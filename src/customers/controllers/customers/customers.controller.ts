import { Controller, Get, Post, Req, Put, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { CustomerDTO } from 'types';
import { CustomersService } from 'src/customers/service/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  getAllCustomers() {
    return this.customersService.getAllCustomers();
  }

  @Get(':id')
  getCustomerById(@Req() request: Request<{ id: string }>) {
    return this.customersService.getCustomerById(Number(request.params.id));
  }

  @Post('new')
  addNewCustomer(@Req() request: Request<{ body: CustomerDTO }>) {
    return this.customersService.addNewCustomer(request.body);
  }

  @Put('update/:id')
  updateCustomer(
    @Req() request: Request<{ id: string; body: CustomerDTO }>,
    @Res() res: Response,
  ) {
    const updatedResult = this.customersService.updateCustomer(
      Number(request.params.id),
      request.body,
    );

    if (updatedResult === 'Customer not found') {
      return res.status(404).send(updatedResult);
    }

    return res.status(200).send(updatedResult);
  }
}
