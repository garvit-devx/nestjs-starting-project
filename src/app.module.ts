import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';

import { LoggerMiddleware } from './middlewares/logger.middleware';
import SimpleMiddleware from './middlewares/simple-logger.middleware';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  // Some comment
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(SimpleMiddleware, LoggerMiddleware).forRoutes('customers');
  }
}
