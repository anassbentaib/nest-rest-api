import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.userGlobal is for validation
  app.useGlobalPipes(
    new ValidationPipe({
      // We use the white list to do not show the element that we havn't in DTO interface
      whitelist: true,
    }),
  );
  await app.listen(3333);
}
bootstrap();
