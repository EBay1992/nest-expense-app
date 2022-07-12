import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  ///global pipe validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //validate all properties and remove those that are not in the schema of DTO
      transformOptions:{
        enableImplicitConversion: true,  //* to use interceptor to convert to DTO
      }
    }),
  );

  await app.listen(3000);
}
bootstrap();
