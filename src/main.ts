import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // удаляет поля, которых нет в DTO
      forbidNonWhitelisted: true, // вызывает ошибку, если в объекте есть неизвестные поля
      transform: true, // автоматически преобразует входные данные в нужный тип
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
