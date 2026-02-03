import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log', 'debug']
  });

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }))

  const config = new DocumentBuilder()
    .setTitle('EDI - Integration - API Documentation')
    .setDescription(`API for integrating EDI (Electronic Data Interchange) system`)
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      name: 'JWT',
      description: 'Enter JWT token',
      in: 'header'
    },
      'BearerAuth',
    )
    .setContact(
      'Support',
      'https://mimostyle.com.br/',
      'suporte@mimostyle.com.br'
    )
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT || 3000;

  await app.listen(port);

  logger.log(`Base URL: http: localhost:${port}/api`);
  logger.log(`Health Check: http://localhost:${port}/health`);
  logger.log(`Swagger: http://localhost:${port}/api/docs`);
}
bootstrap().catch((err) => {
  new Logger('Bootstrap').error('Error starting the application', err.stack);
  process.exit(1);
});
