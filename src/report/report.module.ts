import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { CustomInterceptor } from 'src/Interceptor/custom.Interceptor';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
  controllers: [ReportController],
  providers: [ReportService, {
    provide: APP_INTERCEPTOR,
    useClass:ClassSerializerInterceptor
    // useClass: CustomInterceptor
  }]
})
export class ReportModule {}
