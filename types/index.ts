export interface ICustomer {
  id: number;
  email: string;
  username: string;
  createdAt: Date;
}

export class CustomerDTO {
  email: string;
  username: string;
  createdAt: Date;
}
