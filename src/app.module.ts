import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { TemplatesModule } from './templates/templates.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ApiKeyMiddleware } from './auth/api-key.middleware';

@Module({
  imports: [MessagesModule, TemplatesModule, AuthModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiKeyMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
