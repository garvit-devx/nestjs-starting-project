import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { ZodSchema } from 'zod';

import { CustomerDTO } from 'types';

export class ZodValidationPipe
  implements PipeTransform<CustomerDTO, CustomerDTO | String>
{
  constructor(private schema: ZodSchema) {}

  transform(
    value: CustomerDTO,
    metadata: ArgumentMetadata,
  ): String | CustomerDTO {
    try {
      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      throw new BadRequestException('Validation failed');
    }
  }
}
