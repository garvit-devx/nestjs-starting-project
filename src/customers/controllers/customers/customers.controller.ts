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
    const response = this.customersService.updateCustomer(
      Number(request.params.id),
      request.body,
    );

    return res.json(response);
  }
}
