import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dbInstance from './config-db/dbinstance';

async function bootstrap() {
  await dbInstance.init();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
