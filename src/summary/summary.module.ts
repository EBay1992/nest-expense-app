import { Module } from '@nestjs/common';
import { ReportModule } from 'src/report/report.module';
import { SummaryController } from './summary.controller';
import { SummaryService } from './summary.service';

@Module({
  controllers: [SummaryController],
  providers: [SummaryService],
  imports: [ReportModule] //! We import the whole things the "ReportModule" provide as Exports things
})
export class SummaryModule {}
