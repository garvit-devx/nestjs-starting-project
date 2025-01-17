import {
  Controller,
  Get,
  Post,
  Put,
  Res,
  Param,
  ParseIntPipe,
  Body,
  UsePipes,
} from '@nestjs/common';
import { Response } from 'express';

import { CustomerDTO } from 'types';
import { CustomersService } from 'src/customers/service/customers/customers.service';
import { UppercaseTransformPipe } from 'src/pipes/transform.pipe';
import { ZodValidationPipe } from 'src/pipes/zod-validator.pipe';
import { createCustomerSchema } from 'src/schema';

@Controller('customers')
export class CustomersController {
  // Customer controller comment
  constructor(private customersService: CustomersService) {}

  @Get()
  getAllCustomers() {
    return this.customersService.getAllCustomers();
  }

  @Get(':id')
  getCustomerById(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.getCustomerById(id);
  }

  @Post('new')
  @UsePipes(new ZodValidationPipe(createCustomerSchema))
  addNewCustomer(@Body(new UppercaseTransformPipe()) body: CustomerDTO) {
    return this.customersService.addNewCustomer(body);
  }

  @Put('update/:id')
  updateCustomer(
    @Param('id') id: string,
    @Body(new UppercaseTransformPipe()) body: CustomerDTO,
    @Res() res: Response,
  ) {
    const response = this.customersService.updateCustomer(Number(id), body);

    return res.json(response);
  }
}
