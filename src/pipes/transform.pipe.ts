import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

import { CustomerDTO } from 'types';

@Injectable()
export class UppercaseTransformPipe
  implements PipeTransform<CustomerDTO, CustomerDTO>
{
  transform(value: CustomerDTO, metadata: ArgumentMetadata) {
    value.username = value.username.toUpperCase();
    return value;
  }
}
