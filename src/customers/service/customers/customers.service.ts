import { Injectable } from '@nestjs/common';

import { ALL_CUSTOMERS } from 'DUMMY_DATA/customers';
import { CustomerDTO, ICustomer } from 'types';

@Injectable()
export class CustomersService {
  private allCustomers = ALL_CUSTOMERS;

  getAllCustomers() {
    return this.allCustomers;
  }

  getCustomerById(id: number) {
    const requiredCustomer = this.allCustomers.find((cus) => cus.id === id);
    return requiredCustomer;
  }

  addNewCustomer(newCustomer: CustomerDTO) {
    const newCustomerObj: ICustomer = {
      ...newCustomer,
      id:
        this.allCustomers.length > 0
          ? this.allCustomers[this.allCustomers.length - 1].id + 1
          : 1,
    };
    this.allCustomers.push(newCustomerObj);
    return newCustomerObj;
  }

  updateCustomer(id: number, newCustomerDetails: CustomerDTO) {
    const customer = this.getCustomerById(id);
    let updatedCustomer: ICustomer;

    if (customer) {
      updatedCustomer = {
        id,
        ...newCustomerDetails,
      };

      const updateIndex = this.allCustomers.findIndex((cus) => cus.id === id);
      this.allCustomers[updateIndex] = updatedCustomer;
      return updatedCustomer;
    }

    return 'Customer not found';
  }

  deleteCustomer(id: number) {
    const customer = this.getCustomerById(id);

    if (customer) {
      this.allCustomers = this.allCustomers.filter((cus) => cus.id !== id);
      return new String('Customer deleted');
    }

    return new String('Customer not found');
  }
}
