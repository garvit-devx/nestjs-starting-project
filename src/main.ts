import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Comment
// Comment 2
// Comment 2
// Comment 2
// Comment 2

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log({app})
  await app.listen(8000);
}
bootstrap();
