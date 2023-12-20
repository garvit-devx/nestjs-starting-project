import { z } from 'zod';

export const createCustomerSchema = z
  .object({
    email: z.string(),
    username: z.string(),
    createdAt: z.date(),
  })
  .required();
