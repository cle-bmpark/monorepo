import fastifyCsrf from '@fastify/csrf-protection';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from '@/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  await app.register(fastifyCsrf);

  app.enableCors({
    origin: ['http://localhost:3000', 'https://monitoring-admin.vercel.app'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // 쿠키/인증 헤더를 함께 보내려면 true
  });

  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
  await app.listen(port, '0.0.0.0');
}

bootstrap().catch(() => {
  process.exit(1);
});
