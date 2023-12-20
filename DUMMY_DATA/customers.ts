import { ICustomer } from 'types';

export const ALL_CUSTOMERS: ICustomer[] = [
  {
    id: 1,
    email: 'user1@email.com',
    username: 'user1',
    createdAt: new Date(),
  },
  {
    id: 2,
    email: 'user2@email.com',
    username: 'user2',
    createdAt: new Date('December 26, 2023'),
  },
  {
    id: 3,
    email: 'user3@email.com',
    username: 'user3',
    createdAt: new Date('December 27, 2023'),
  },
];
