import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api')
  app.listen(3006)
  app.enableCors({
    origin: ['http://localhost:5173'],
  })
}
bootstrap()
