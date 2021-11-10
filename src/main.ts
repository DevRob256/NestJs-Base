import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { createSwagger } from './shared/swagger';

bootstrap();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  createSwagger(app);

  app.useGlobalPipes(new ValidationPipe());

  const configService = app.get(ConfigService);
  const APP_PORT = configService.get('APP_PORT');
  await app.listen(APP_PORT);
}
