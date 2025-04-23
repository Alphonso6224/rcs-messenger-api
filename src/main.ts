import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('RCS Messenger API')
    .setDescription('API pour l\'envoie de messages enrichis via RCS/Twilio')
    .setVersion('1.0')
    .addApiKey({
      type: 'apiKey',
      name: 'x-api-key',
      in: 'header'
    }, 'api-key')
    .addTag('messages')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
