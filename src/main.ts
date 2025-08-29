import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import configuration from './config/configuration';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      new FastifyAdapter(),
    );
    
    const config = configuration();
    
    // Enable CORS
    app.enableCors({
      origin: config.frontendUrl,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      credentials: true,
    });
    
    // Global prefix for API routes
    app.setGlobalPrefix('api');
    
    const port = config.port;
    await app.listen(port, '0.0.0.0');
    
    console.log(`🚀 WebSense Backend is running on port ${port}`);
    console.log(`🌍 Environment: ${config.environment}`);
    console.log(`🔗 Frontend URL: ${config.frontendUrl}`);
    
  } catch (error) {
    console.error('Failed to start WebSense Backend:', error);
    process.exit(1);
  }
}

bootstrap();
