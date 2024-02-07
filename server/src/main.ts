import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import express from 'express';
import * as httpContext from 'express-http-context';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const PORT = 3000;

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, {
    cors: {
      credentials: true,
      optionsSuccessStatus: 200,
    },
  });
  app.use(httpContext.middleware);
  // swagger config
  const swaggerOption = new DocumentBuilder()
    .setTitle('BFF API')
    .setDescription('The BFF API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerOption);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(`${PORT}`, '0.0.0.0');
  console.log('server start at http://localhost:%s', PORT);
}
bootstrap();
