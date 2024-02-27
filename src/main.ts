import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from './configs/configuration.config';

async function bootstrap() {
  console.log(typeof process.env.NODE_ENV);
  const logger = new Logger(bootstrap.name);
  const app = await NestFactory.create(AppModule);
  const config_service = app.get(ConfigService);
  var database_env = config_service.get<DatabaseConfig>('database');
  logger.debug(database_env);
  await app.listen(config_service.get('PORT'), () =>
    logger.log(`Application running on port ${config_service.get('PORT')}`)
  );
}
bootstrap();
