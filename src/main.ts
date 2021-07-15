import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";

async function bootstrap(port: number) {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
  console.log(`Application is running on: ${await app.getUrl()}`);
}

const PORT = Number(process.env.PORT) || 8080;
bootstrap(PORT);
