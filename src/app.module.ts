import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomInterceptor } from './Interceptor/custom.Interceptor';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_INTERCEPTOR,
    // useClass:ClassSerializerInterceptor
    useClass: CustomInterceptor
  }],
})
export class AppModule {}
